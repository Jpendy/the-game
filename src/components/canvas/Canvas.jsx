import React from 'react'

export default function Canvas() {


    let ctx = null;
    const tileW = 40;
    const tileH = 40;
    const mapW = 20;
    const mapH = 10;

    let currentSecond = 0, frameCount = 0, framesLastSecond = 0;

    const gameMap = [
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 1, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        1, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        1, 0, 0, 0, 1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    ]

    window.onload = function () {
        ctx = document.querySelector("canvas").getContext("2d");
        requestAnimationFrame(drawGame);
        ctx.font = "bold 10pt sans-serif";
    }

    function drawGame() {
        if (ctx === null) return
        let sec = Math.floor(Date.now() / 1000);
        if (sec !== currentSecond) {
            currentSecond = sec;
            framesLastSecond = frameCount;
            frameCount = 1;
        }
        else { frameCount++ }

        for (let y = 0; y < mapH; y++) {
            for (let x = 0; x < mapW; x++) {
                switch (gameMap[((y * mapW) + x)]) {
                    case 0:
                        ctx.fillStyle = "#999999";
                        break;
                    default:
                        ctx.fillStyle = "#eeeeee"
                }
                ctx.fillRect(x * tileW, y * tileH, tileW, tileH)
            }
        }
        ctx.fillStyle = "#ff0000";
        ctx.fillText("FPS " + framesLastSecond, 10, 20)
        requestAnimationFrame(drawGame)
    }

    return (
        <div>
            <canvas style={{
                height: "600",
                width: "600"
            }}

            ></canvas>
        </div>
    )
}