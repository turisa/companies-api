import axios from 'axios';

import Credentials from '../types/Credentials';

const baseUrl = 'http://localhost:4000/api/login';

const login = async (credentials: Credentials) => {
  const response = await axios.post(baseUrl, credentials);

  return response.data;
};

const loginService = { login };

export default loginService;
