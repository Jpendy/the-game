import React, { useEffect } from 'react'
import Canvas from '../canvas/Canvas'
import Character from '../character/Character';
import Enemy from '../enemy/Enemy';
import './Map.css'
import { useState } from '../../hooks/gameContext'

export default function Map() {

    const { mainCharacter, enemy } = useState();


    // if ((mainCharacter.x) > (700) &&
    //     mainCharacter.x < (750) &&
    //     (mainCharacter.y) > (401) &&
    //     mainCharacter.y < (450)
    // ) {
    //     alert('YOU FOUND THE BOX')
    // }

    console.log('ENEMY', enemy.x, enemy.y, enemy.width, enemy.height)
    console.log('CHARACTER', mainCharacter.x, mainCharacter.y, mainCharacter.width, mainCharacter.height)





    // if (mainCharacter.x + mainCharacter.width >= enemy.x &&     // r1 right edge past r2 left
    //     mainCharacter.x <= enemy.x + enemy.width &&       // r1 left edge past r2 right
    //     mainCharacter.y + mainCharacter.height >= enemy.y &&       // r1 top edge past r2 bottom
    //     mainCharacter.y <= enemy.y + enemy.height) {       // r1 bottom edge past r2 top
    //     alert('SPOOKY GHOST GOT YOUUUUU')
    //     console.log('colision detected!!!!!!!!!!!!!!')
    // }

    if (mainCharacter.x < (enemy.x + enemy.width) &&
        (mainCharacter.x + mainCharacter.width) > enemy.x &&
        mainCharacter.y < (enemy.y + enemy.height) &&
        (mainCharacter.y + mainCharacter.height) > enemy.y) {
        alert('SPOOKY GHOST GOT YOUUUUU')
    }

    const height = 30;
    const width = 30;
    const mapHeight = 25;
    const mapWidth = 50;

    const mapGrid = [...Array(mapWidth)].map((_, x) => {
        const xAxis = (x + 1)
        return (<div className={`column-${xAxis} column`} >

            {[...Array(mapHeight)].map((_, y) => {
                const yAxis = (y + 1)
                return (<div className={`box box-${xAxis}-${yAxis} row row-${yAxis}`} style={{
                    border: "1px solid black",
                    height,
                    width,
                    // backgroundColor:
                    //     xAxis === 1 || xAxis === 50 || yAxis === 1 || yAxis === 24
                    //         ? 'brown'
                    //         : xAxis > 20 && xAxis < 30 && yAxis > 8 && yAxis < 15
                    //         && 'lightskyblue'
                    // ,
                    // background: yAxis % 2 === 1 && xAxis % 2 === 1
                    //     ? 'green'
                    //     : yAxis % 2 === 0 && xAxis % 2 === 0 && "blue",
                }}>

                </div>)
            })}
        </div>
        );
    })

    return (
        <div className={"board-container"}>
            <Enemy enemyStartingPosition={{ x: 700, y: 400 }} />
            {/* <Enemy enemyStartingPosition={{ x: 800, y: 300 }} />
            <Enemy enemyStartingPosition={{ x: 650, y: 300 }} />
            <Enemy enemyStartingPosition={{ x: 900, y: 400 }} /> */}

            <Character />
            {mapGrid}
        </div>
    )
}
