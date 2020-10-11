import React from 'react';
import Character from '../../components/character/Character';
import Map from '../../components/map/Map'

export default function GameContainer() {


    return (
        <div>

            <section style={{
                display: 'flex',
                justifyContent: 'center',
                alignContent: 'center'
            }}>
                <Map />
            </section>

            {/* hello map */}
        </div>
    )
}
