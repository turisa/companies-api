import { useState } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Companies from './components/Companies';
import Countries from './components/Countries';
import Jobs from './components/Jobs';
import Managers from './components/Managers';
import Navbar from './components/Navbar';

import CompanyDetail from './components/CompanyDetail';
import CountryDetail from './components/CountryDetail';
import JobDetail from './components/JobDetail';
import ManagerDetail from './components/ManagerDetail';
import LoginForm from './components/LoginForm';

import User from './types/User';

function App() {
  const [user, setUser] = useState<User | null>(null);

  return (
    <div className="bg-gray-100 sticky min-h-screen h-full w-screen">
      {user ? <Navbar /> : null}
      <Switch>
        <Route path="/login">
          <LoginForm />
        </Route>
        <Route path="/companies/:id">
          {user ? <CompanyDetail /> : <Redirect to="/login" />}
        </Route>
        <Route path="/countries/:id">
          {user ? <CountryDetail /> : <Redirect to="/login" />}
        </Route>
        <Route path="/jobs/:id">
          {user ? <JobDetail /> : <Redirect to="/login" />}
        </Route>
        <Route path="/managers/:id">
          {user ? <ManagerDetail /> : <Redirect to="/login" />}
        </Route>
        <Route path="/companies">
          {user ? <Companies /> : <Redirect to="/login" />}
        </Route>
        <Route path="/countries">
          {user ? <Countries /> : <Redirect to="/login" />}
        </Route>
        <Route path="/jobs">{user ? <Jobs /> : <Redirect to="/login" />}</Route>
        <Route path="/managers">
          {user ? <Managers /> : <Redirect to="/login" />}
        </Route>
        <Route path="/">
          <Redirect to="/companies" />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
