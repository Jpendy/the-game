import React, { useState, useEffect } from 'react'
import useEnemyMovement from '../../hooks/useEnemyMovement';
// import useEnemyMovement from '../../hooks/useEnemyMovement'

export default function Enemy({ enemyStartingPosition, backgroundPosition, dir = 0, step = 0 }) {

    const { enemyPosition } = useEnemyMovement(enemyStartingPosition);


    const enemy = {
        height: 32,
        width: 32
    }

    return (
        <div style={{
            position: 'relative',
            top: `${enemyPosition.y}px`,
            left: `${enemyPosition.x}px`,
            width: `${enemy.width}px`,
            height: `${enemy.height}px`,
            transform: 'scale(2)',
            backgroundImage: "url('sprite-images/spooky-sprite.png')",
            backgroundPosition: `-${step * enemy.width}px -${dir * enemy.height}px`
        }}>
        </div>
    )
}