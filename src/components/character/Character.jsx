import React from 'react'
import { useMainCharacterData } from '../../hooks/gameContext'
import useKeyPress from '../../hooks/useKeyPress';
import useWalk from '../../hooks/useWalk';
import Actor from '../actor/Actor';

export default function Character() {


    const { dir, step, position, walk } = useWalk(3);

    const data = {
        height: 32,
        width: 32,
    }

    useKeyPress((e) => {
        walk(e.key.replace("Arrow", "").toLowerCase())
        e.preventDefault()
    })

    return (
        <>
            <Actor
                data={data}
                step={step}
                dir={dir}
                position={position} />
        </>
    )
}
