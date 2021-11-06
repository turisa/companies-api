import Job from '../types/Job';
import RestService from './restService';

const baseUrl = 'http://localhost:4000/api/jobs';

const jobsService = new RestService<Job>(baseUrl);

export default jobsService;
