import Country from './Country';
import Job from './Job';
import Manager from './Manager';

export default interface Company {
  id: string;
  name: string;
  description: string;
  country: Country;
  jobs: Job[];
  managers: Manager[];
}
