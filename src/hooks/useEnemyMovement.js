/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react'
import { edgesOfMap } from '../data/obstacles/obstacles'
import { stopAtEdgeOfMap } from '../utils/utils'
import { useDispatch } from '../hooks/gameContext'

export default function useEnemyMovement(enemyStartingPosition) {
    const dispatch = useDispatch();

    const [enemyPosition, setEnemyPosition] = useState(enemyStartingPosition)
    // const [stepSize, setStepSize] = useState(40)

    const directions = [
        'up',
        'right',
        'down',
        'left'
    ]

    useEffect(() => {
        setInterval(() => {

            // console.log(randomStepSize)

            const randomNumber = Math.floor(Math.random() * 4)
            movement(directions[randomNumber])
        }, 200)

    }, [])

    // const stepSize = 13

    function movement(dir) {
        const stepSize = Math.floor(Math.random() * 2)

        if (dir === 'right') setEnemyPosition(prev => {
            const result = stopAtEdgeOfMap(prev, edgesOfMap)

            if (result) {
                dispatch({ type: 'UPDATE_ENEMY_POSITION', payload: result })
                return result
            }
            else {
                dispatch({ type: 'UPDATE_ENEMY_POSITION', payload: { ...prev, x: prev.x + stepSize } })
                return { ...prev, x: prev.x + stepSize }
            }
        })
        if (dir === 'left') setEnemyPosition(prev => {
            const result = stopAtEdgeOfMap(prev, edgesOfMap)

            if (result) {
                dispatch({ type: 'UPDATE_ENEMY_POSITION', payload: result })
                return result
            }
            else {
                dispatch({ type: 'UPDATE_ENEMY_POSITION', payload: { ...prev, x: prev.x - stepSize } })
                return { ...prev, x: prev.x - stepSize }
            }
        })

        if (dir === 'down') setEnemyPosition(prev => {
            const result = stopAtEdgeOfMap(prev, edgesOfMap)

            if (result) {
                dispatch({ type: 'UPDATE_ENEMY_POSITION', payload: result })
                return result
            }
            else {
                dispatch({ type: 'UPDATE_ENEMY_POSITION', payload: { ...prev, y: prev.y + stepSize } })
                return { ...prev, y: prev.y + stepSize }
            }
        })
        if (dir === 'up') setEnemyPosition(prev => {
            const result = stopAtEdgeOfMap(prev, edgesOfMap)

            if (result) {
                dispatch({ type: 'UPDATE_ENEMY_POSITION', payload: result })
                return result
            }
            else {
                dispatch({ type: 'UPDATE_ENEMY_POSITION', payload: { ...prev, y: prev.y - stepSize } })
                return { ...prev, y: prev.y - stepSize }
            }
        })

    }

    return {
        enemyPosition
    }
}