import React from 'react'
import { useMainCharacterData } from '../../hooks/gameContext'

export default function Sprite() {

    const { x_position, y_position, height, width } = useMainCharacterData();


    return (
        <div style={{
            display: "inline-block",
            height: `${height}px`,
            width: `${width}px`,
            backgroundImage: "url(character-sprite-1.png)",
            backgroundRepeat: "no-repeat",
            backgroundPosition: `-${x_position}px -${y_position}`,
        }}>

        </div>
    )
}
