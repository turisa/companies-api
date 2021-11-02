import React, { useState, useEffect } from 'react';
import { Switch, Route, Redirect, Link } from 'react-router-dom';

import Companies from './components/Companies';
import Countries from './components/Countries';
import Jobs from './components/Jobs';
import Managers from './components/Managers';
import Navbar from './components/Navbar';

import Company from './types/Company';
import Country from './types/Country';
import Job from './types/Job';
import Manager from './types/Manager';

import companiesService from './services/companiesService';
import countriesService from './services/countriesService';
import jobsService from './services/jobsService';
import managersService from './services/managersService';

function App() {
  const [companies, setCompanies] = useState<Company[]>([]);
  const [countries, setCountries] = useState<Country[]>([]);
  const [jobs, setJobs] = useState<Job[]>([]);
  const [managers, setManagers] = useState<Manager[]>([]);

  useEffect(() => {
    companiesService.getAll().then((companies) => setCompanies(companies));
  }, []);

  useEffect(() => {
    countriesService.getAll().then((result) => setCountries(result));
  }, []);

  useEffect(() => {
    jobsService.getAll().then((result) => setJobs(result));
  }, []);

  useEffect(() => {
    managersService.getAll().then((result) => setManagers(result));
  }, []);

  return (
    <div className="bg-gray-100 sticky min-h-screen h-full w-screen">
      <Navbar />
      <Switch>
        <Route path="/companies">
          <Companies companies={companies} />
        </Route>
        <Route path="/countries">
          <Countries countries={countries} />
        </Route>
        <Route path="/jobs">
          <Jobs jobs={jobs} />
        </Route>
        <Route path="/managers">
          <Managers managers={managers} />
        </Route>
        <Route path="/">
          <Redirect to="/companies" />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
