import React, { useContext } from 'react';

export const GameContext = React.createContext();

export const useGlobalState = () => {
    const { state } = useContext(GameContext);
    return state;
};

export const useDispatch = () => {
    const { dispatch } = useContext(GameContext);
    return dispatch;
};

export const useMainCharacterData = () => {
    const { mainCharacter } = useGlobalState();
    return mainCharacter.data;
}