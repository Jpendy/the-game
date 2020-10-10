import React from 'react';
import { render } from 'react-dom';
import App from './components/app/App';
import GameProvider from './providers/gameProvider';

render(
  <GameProvider>
    <App />
  </GameProvider>,
  document.getElementById('root')
);
