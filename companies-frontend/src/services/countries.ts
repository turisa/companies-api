import Country from '../types/Country';
import RestService from './restService';

const baseUrl = 'http://localhost:4000/api/countries';

const countriesService = new RestService<Country>(baseUrl);

export default countriesService;
