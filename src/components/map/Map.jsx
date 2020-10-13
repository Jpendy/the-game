import React, { useEffect } from 'react'
import Canvas from '../canvas/Canvas'
import Character from '../character/Character';
import Enemy from '../enemy/Enemy';
import './Map.css'
import { useGlobalState, useDispatch } from '../../hooks/gameContext'
import BetterEnemy from '../enemy/BetterEnemy';


export default function Map() {
    const dispatch = useDispatch()
    const { mainCharacter, enemy } = useGlobalState();



    if (mainCharacter.x < (enemy.x + enemy.width) &&
        (mainCharacter.x + mainCharacter.width) > enemy.x &&
        mainCharacter.y < (enemy.y + enemy.height) &&
        (mainCharacter.y + mainCharacter.height) > enemy.y) {
        alert('SPOOKY GHOST GOT YOUUUUU')
        window.location.reload()
    }

    const height = 30;
    const width = 30;
    const mapHeight = 25;
    const mapWidth = 50;

    const mapGrid = [...Array(mapWidth)].map((_, x) => {
        const xAxis = (x + 1)
        return (
            <div className={`column-${xAxis} column`} >

                {[...Array(mapHeight)].map((_, y) => {
                    const yAxis = (y + 1)
                    return (<div className={`box box-${xAxis}-${yAxis} row row-${yAxis}`} style={{
                        border: "1px solid black",
                        height,
                        width,
                    }}>
                    </div>)
                })}
            </div>
        );
    })

    return (
        <div className={"board-container"}>
            {mapGrid}
            <Character
                spriteImage={'sprite-images/character-sprite-1.png'}
                startingPosition={{ x: 500, y: 300 }}
            />

            <BetterEnemy
                startingPosition={{ x: 900, y: 400 }}
                spriteImage={'sprite-images/spooky-sprite.png'} />






            {/* <Enemy enemyStartingPosition={{ x: 700, y: 400 }} />
            <Enemy enemyStartingPosition={{ x: 800, y: 300 }} />
            <Enemy enemyStartingPosition={{ x: 650, y: 300 }} />
            <Enemy enemyStartingPosition={{ x: 900, y: 400 }} /> */}
        </div>
    )
}
