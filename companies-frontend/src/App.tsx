import React, { useState, useEffect } from 'react';
import { Switch, Route, Redirect, Link } from 'react-router-dom';

import Companies from './components/Companies';
import Countries from './components/Countries';
import Jobs from './components/Jobs';
import Managers from './components/Managers';
import Navbar from './components/Navbar';

import CompanyDetail from './components/CompanyDetail';
import CountryDetail from './components/CountryDetail';
import JobDetail from './components/JobDetail';
import ManagerDetail from './components/ManagerDetail';

function App() {
  return (
    <div className="bg-gray-100 sticky min-h-screen h-full w-screen">
      <Navbar />
      <Switch>
        <Route path="/companies/:id">
          <CompanyDetail />
        </Route>
        <Route path="/countries/:id">
          <CountryDetail />
        </Route>
        <Route path="/jobs/:id">
          <JobDetail />
        </Route>
        <Route path="/managers/:id">
          <ManagerDetail />
        </Route>
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
