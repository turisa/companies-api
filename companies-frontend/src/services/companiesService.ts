import axios from 'axios';

import Company from '../types/Company';

const baseUrl = 'http://localhost:4000/api/companies';

const getAll = async (params?: { name: string }) => {
  const response = await axios.get(baseUrl, { params });
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
