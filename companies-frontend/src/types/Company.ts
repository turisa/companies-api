import Country from './Country';
import Job from './Job';
import Manager from './manager';

export default interface Company {
  name: string;
  description: string;
  country: Country;
  jobs: Job[];
  managers: Manager[];
}
