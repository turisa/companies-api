import Company from '../types/Company';
import RestService from './restService';

const baseUrl = 'http://localhost:4000/api/companies';

const companiesService = new RestService<Company>(baseUrl);

export default companiesService;
