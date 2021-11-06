import { Switch, Route, Redirect } from 'react-router-dom';

import { useEffect, useState } from 'react';

import Companies from './components/companies/Companies';
import Countries from './components/countries/Countries';
import Jobs from './components/jobs/Jobs';
import Managers from './components/managers/Managers';
import Navbar from './components/Navbar';

import CompanyDetail from './components/companies/CompanyDetail';
import CountryDetail from './components/countries/CountryDetail';
import JobDetail from './components/jobs/JobDetail';
import ManagerDetail from './components/managers/ManagerDetail';
import LoginForm from './components/LoginForm';
import SignUpForm from './components/SignUpForm';

const App = () => {
  const [token, setToken] = useState<string | null>(null);

  if (!token) {
    const loggedCompanyAPIUser = window.localStorage.getItem(
      'loggedCompanyAPIUser'
    );

    if (loggedCompanyAPIUser) {
      const user = JSON.parse(loggedCompanyAPIUser);
      const token = user.token;

      if (token) {
        setToken(token);
      }
    }
  }

  return (
    <div className="bg-gray-100 sticky min-h-screen h-full w-screen">
      <Navbar token={token} />
      <Switch>
        <Route path="/signup">
          <SignUpForm />
        </Route>
        <Route path="/login">
          <LoginForm setToken={setToken} />
        </Route>
        <Route path="/companies/:id">
          {token ? <CompanyDetail token={token} /> : <Redirect to="/login" />}
        </Route>
        <Route path="/countries/:id">
          {token ? <CountryDetail token={token} /> : <Redirect to="/login" />}
        </Route>
        <Route path="/jobs/:id">
          {token ? <JobDetail token={token} /> : <Redirect to="/login" />}
        </Route>
        <Route path="/managers/:id">
          {token ? <ManagerDetail token={token} /> : <Redirect to="/login" />}
        </Route>
        <Route path="/companies">
          {token ? <Companies token={token} /> : <Redirect to="/login" />}
        </Route>
        <Route path="/countries">
          {token ? <Countries token={token} /> : <Redirect to="/login" />}
        </Route>
        <Route path="/jobs">
          {token ? <Jobs token={token} /> : <Redirect to="/login" />}
        </Route>
        <Route path="/managers">
          {token ? <Managers token={token} /> : <Redirect to="/login" />}
        </Route>
        <Route path="/">
          <Redirect to="/companies" />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
