import React from 'react'
import { useMainCharacterData } from '../../hooks/gameContext'

export default function Sprite({ data, position }) {

    const { x_position, y_position, height, width } = data;

    return (
        <div style={{
            position: "absolute",
            top: position.y,
            left: position.x,
            height: `${height}px`,
            width: `${width}px`,
            zIndex: '101',
            transform: "scale(2)",
            backgroundImage: "url(character-sprite-1.png)",
            backgroundRepeat: "no-repeat",
            backgroundPosition: `-${x_position}px -${y_position}px`,
        }}>
        </div>
    )
}
