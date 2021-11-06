import axios from 'axios';

const baseUrl = 'http://localhost:4000/api/users';

const create = async (user: {
  name: string;
  username: string;
  password: string;
}) => {
  const response = await axios.post(baseUrl, user);
  return response.data;
};

const get = async (token: string, userId: string) => {
  const config = {
    headers: {
      Authorization: `bearer ${token}`,
    },
  };

  const response = await axios.get(`${baseUrl}/${userId}`, config);
  return response.data;
};

const usersService = {
  create,
  get,
};

export default usersService;
