import axios from 'axios';

const baseUrl = 'http://localhost:4000/api/reviews';

const post = async (token: string, companyId: string, content: string) => {
  const config = {
    headers: {
      Authorization: `bearer ${token}`,
    },
  };

  const response = await axios.post(baseUrl, { companyId, content }, config);
  return response.data;
};

const put = async (
  token: string,
  reviewId: string,
  companyId: string,
  newContent: string
) => {
  const config = {
    headers: {
      Authorization: `bearer ${token}`,
    },
  };

  const response = await axios.put(
    `${baseUrl}/${reviewId}`,
    { companyId, content: newContent },
    config
  );
  return response.data;
};

const reviewsService = {
  post,
  put,
};

export default reviewsService;
