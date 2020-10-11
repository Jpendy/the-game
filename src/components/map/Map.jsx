import React from 'react'
import Canvas from '../canvas/Canvas'
import './Map.css'

export default function Map() {

    const colorOverRide = "orange"

    const height = 29;
    const width = 29;
    const mapHeight = 24;
    const mapWidth = 50;

    const mapGrid = [...Array(mapWidth)].map((_, x) => {
        return (<div className={`column-${(x + 1)} column`} >

            {[...Array(mapHeight)].map((_, y) => {
                return (<div id={`box-${(x + 1)}-${(y + 1)} row row-${(y + 1)}`} style={{
                    border: "1px solid black",
                    height,
                    width,
                    backgroundColor:
                        ((x + 1) === 1 || (x + 1) === 50 || (y + 1) === (1) || (y + 1) === 24) ? 'brown' : 'lightskyblue'
                    // background: ((y + 1) % 2 === 1 && (x + 1) % 2 === 1) ? 'green' : ((y + 1) % 2 === 0 && (x + 1) % 2 === 0) && "blue",
                }}>

                </div>)
            })}
        </div>
        );
    })

    return (
        <div className={"board-container"}>
            {mapGrid}  {/* <Canvas /> */}
        </div>
    )
}
