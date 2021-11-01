import axios from 'axios';

import Company from '../types/Company';

const baseUrl = 'http://localhost:4000/companies';

const getAll = async () => {
  const response = await axios.get(baseUrl);
  const companies: Company[] = response.data;

  return companies;
};

const get = async (id: string) => {
  const response = await axios.get(`${baseUrl}/${id}`);
  const company: Company = response.data;

  return company;
};

const companiesService = {
  getAll,
  get,
};

export default companiesService;
