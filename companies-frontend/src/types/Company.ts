import Country from './Country';
import Job from './Job';
import Manager from './Manager';
import Review from './Review';

export default interface Company {
  id: string;
  name: string;
  description: string;
  country: Country;
  jobs: Job[];
  managers: Manager[];
  reviews: Review[];
}
