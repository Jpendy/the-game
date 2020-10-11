import { useState } from 'react';
import { edgesOfMap, edgesOfLake } from '../data/obstacles/obstacles.js'

export default function useWalk(maxSteps) {
    const [position, setPosition] = useState({ x: 500, y: 300 })
    const [dir, setDir] = useState(0);
    const [step, setStep] = useState(0);

    console.log(position)
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
        const { left, top, right, bottom } = edgesOfMap;
        const { left: leftLake, top: topLake, right: rightLake, bottom: bottomLake, midLake } = edgesOfLake;

        setPosition(prev => {

            if (prev.x < left) return { ...prev, x: prev.x + 2 }
            if (prev.x > right) return { ...prev, x: prev.x - 2 }
            if (prev.y > bottom) return { ...prev, y: prev.y - 2 }
            if (prev.y < top) return { ...prev, y: prev.y + 2 }

            if (prev.x > leftLake && prev.y > topLake && prev.x < rightLake && prev.y < bottomLake) {
                // alert('You Drowned')
                return {
                    x: prev.x - 2,
                    y: prev.y - 2
                }
            } else if (prev.y > bottomLake && prev.y < topLake && prev.x < rightLake && prev.x > leftLake) {
                return {
                    x: prev.x + 2,
                    y: prev.y + 2
                }
            }

            else return {
                x: prev.x + modifier[dir].x,
                y: prev.y + modifier[dir].y
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