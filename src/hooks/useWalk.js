import { useState } from 'react';
import { edgesOfMap, edgesOfLake } from '../data/obstacles/obstacles.js'
import { stopAtEdgeOfMap } from '../utils/utils.js';
import { useDispatch, useGlobalState } from '../hooks/gameContext'

export default function useWalk(maxSteps, startingPosition) {
    const dispatch = useDispatch()

    const [position, setPosition] = useState(startingPosition)
    const [dir, setDir] = useState(0);
    const [step, setStep] = useState(0);

    const { mainCharacter, enemy } = useGlobalState();



    // if (mainCharacter.x < (enemy.x + enemy.width) &&
    //     (mainCharacter.x + mainCharacter.width) > enemy.x &&
    //     mainCharacter.y < (enemy.y + enemy.height) &&
    //     (mainCharacter.y + mainCharacter.height) > enemy.y) {
    //     setPosition({ x: 500, y: 200 })
    //     setDir(0);
    //     setStep(0)
    //     // alert('SPOOKY GHOST GOT YOUUUUU')
    // }

    const directions = {
        down: 0,
        left: 1,
        right: 2,
        up: 3,
    }
    const stepSize = 10;

    const modifier = {
        down: { x: 0, y: stepSize },
        left: { x: -stepSize, y: 0 },
        right: { x: stepSize, y: 0 },
        up: { x: 0, y: -stepSize },
    }

    function walk(dir) {

        setDir((prev) => {
            if (directions[dir] === prev && directions.hasOwnProperty(dir)) {
                move(dir)
            };
            return directions[dir];
        })
        setStep((prev) => (prev < maxSteps - 1 ? prev + 1 : 0))
    }

    function move(dir) {
        setPosition(prev => {
            const result = stopAtEdgeOfMap(prev, edgesOfMap)
            if (result) {
                dispatch({ type: 'UPDATE_POSITION', payload: result })
                return result;
            }
            else {
                dispatch({
                    type: 'UPDATE_POSITION', payload: {
                        x: prev.x + modifier[dir].x,
                        y: prev.y + modifier[dir].y
                    }
                })

                return {
                    x: prev.x + modifier[dir].x,
                    y: prev.y + modifier[dir].y
                }
            }
        })
    }


    return {
        walk,
        dir,
        step,
        position,
    }
}