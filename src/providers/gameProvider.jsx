import React, { useReducer } from 'react';
import { GameContext } from '../hooks/gameContext';
import reducer, { initialState } from '../reducers/gameReducer';

export default function GameProvider({ children }) {
    const [state, dispatch] = useReducer(reducer, initialState)


    return (
        <GameContext.Provider value={{ state, dispatch }} >
            {children}
        </GameContext.Provider>
    )
}
