import axios from 'axios';

import Country from '../types/Country';
import { service } from './genericService';

const baseUrl = 'http://localhost:4000/api/countries';

const getAll = async (params?: { name: string }) => {
  const response = await axios.get(baseUrl, { params });
  const countries: Country[] = response.data;

  return countries;
};

const get = async (id: string) => {
  const response = await axios.get(`${baseUrl}/${id}`);
  const country: Country = response.data;

  return country;
};

const countriesService = {
  getAll,
  get,
};

export default countriesService;
