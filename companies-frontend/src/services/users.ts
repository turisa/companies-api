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

const usersService = {
  create,
};

export default usersService;
