import React from 'react'
import Sprite from '../sprite/Sprite'

export default function Actor({ data, position = { x: 0, y: 0 }, step = 0, dir = 0 }) {
    const { height, width } = data;

    return (
        <div>
            <Sprite
                position={position}
                data={{
                    x_position: step * width,
                    y_position: dir * height,
                    width,
                    height,
                }} />
        </div>
    )
}
