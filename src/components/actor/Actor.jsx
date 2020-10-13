import React from 'react'
import Sprite from '../sprite/Sprite'

export default function Actor({ data, position = { x: 0, y: 0 }, step = 0, dir = 0 }) {
    const { height, width, spriteImage } = data;

    return (
        <>
            <Sprite

                position={position}
                data={{
                    x_position: step * width,
                    y_position: dir * height,
                    width,
                    height,
                    spriteImage
                }} />
        </>
    )
}
