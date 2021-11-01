import axios from 'axios';

import Country from '../types/Country';

const baseUrl = 'http://localhost:4000/api/countries';

const getAll = async () => {
  const response = await axios.get(baseUrl);
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
