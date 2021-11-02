import axios from 'axios';

import Job from '../types/Job';

const baseUrl = 'http://localhost:4000/api/jobs';

const getAll = async (params?: { name: string }) => {
  const response = await axios.get(baseUrl, { params });
  const jobs: Job[] = response.data;

  return jobs;
};

const get = async (id: string) => {
  const response = await axios.get(`${baseUrl}/${id}`);
  const job: Job = response.data;

  return job;
};

const jobsService = {
  getAll,
  get,
};

export default jobsService;
