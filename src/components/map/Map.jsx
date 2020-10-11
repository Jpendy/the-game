import React from 'react'
import Canvas from '../canvas/Canvas'
import Character from '../character/Character';
import './Map.css'

export default function Map() {

    const colorOverRide = "orange"

    const height = 29;
    const width = 29;
    const mapHeight = 24;
    const mapWidth = 50;

    const mapGrid = [...Array(mapWidth)].map((_, x) => {
        const xAxis = (x + 1)
        return (<div className={`column-${xAxis} column`} >

            {[...Array(mapHeight)].map((_, y) => {
                const yAxis = (y + 1)
                return (<div className={`box box-${xAxis}-${yAxis} row row-${yAxis}`} style={{
                    // border: "1px solid black",
                    height,
                    width,
                    backgroundColor:
                        xAxis === 1 || xAxis === 50 || yAxis === 1 || yAxis === 24
                            ? 'brown'
                            : xAxis > 20 && xAxis < 30 && yAxis > 8 && yAxis < 15
                            && 'lightskyblue'
                    ,
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
            <Character />
            {mapGrid}  {/* <Canvas /> */}
        </div>
    )
}
