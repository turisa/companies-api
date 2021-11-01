import React from 'react';
import './App.css';
import { Switch, Route, Redirect, Link } from 'react-router-dom';
import Companies from './components/Companies';
import Countries from './components/Countries';
import Jobs from './components/Jobs';
import Managers from './components/Managers';

function App() {
  return (
    <div className="App">
      <h1>Companies API</h1>
      <Switch>
        <Route path="/companies">
          <Companies />
        </Route>
        <Route path="/countries">
          <Countries />
        </Route>
        <Route path="/jobs">
          <Jobs />
        </Route>
        <Route path="/managers">
          <Managers />
        </Route>
        <Route path="/">
          <Redirect to="/companies" />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
