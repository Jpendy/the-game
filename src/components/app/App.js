import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import GameContainer from '../../containers/gameContainer/GameContainer';
import Map from '../../containers/gameContainer/GameContainer'

import './App.css';

function App() {

  return (
    <Router>
      <Switch>
        <Route path="/" component={GameContainer} />
        {/* <Route path="/map" component={} /> */}

      </Switch>
    </Router>
  );
}

export default App;
