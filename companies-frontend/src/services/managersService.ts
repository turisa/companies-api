import axios from 'axios';

import Manager from '../types/Manager';

const baseUrl = 'http://localhost:4000/api/managers';

const getAll = async () => {
  const response = await axios.get(baseUrl);
  const managers: Manager[] = response.data;

  return managers;
};

const get = async (id: string) => {
  const response = await axios.get(`${baseUrl}/${id}`);
  const manager: Manager = response.data;

  return manager;
};

const managersService = {
  getAll,
  get,
};

export default managersService;
