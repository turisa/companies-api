import Manager from '../types/Manager';
import RestService from './restService';

const baseUrl = 'http://localhost:4000/api/managers';

const managersService = new RestService<Manager>(baseUrl);

export default managersService;
