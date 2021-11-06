import { Switch, Route, Redirect } from 'react-router-dom';

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
  return (
    <div className="bg-gray-100 sticky min-h-screen h-full w-screen">
      <Navbar />
      <Switch>
        <Route path="/signup">
          <SignUpForm />
        </Route>
        <Route path="/login">
          <LoginForm />
        </Route>
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
};

export default App;
