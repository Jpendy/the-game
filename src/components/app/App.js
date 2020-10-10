import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Map from '../map/Map'

import './App.css';

function App() {

  return (
    <Router>
      <Switch>
        <Route path="/" component={Map} />
        {/* <Route path="/map" component={} /> */}

      </Switch>
    </Router>
  );
}

export default App;
