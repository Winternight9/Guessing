import React from 'react';
import './App.css';
import Game from './Game';
import Creategame from './Creategame'
import { BrowserRouter as Router,Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
        <Route path="/Game/:id" component={Game} />
        <Route path="/" exact component={Creategame} />
      </Switch>
    </div>
    </Router>
  );
}

export default App;
