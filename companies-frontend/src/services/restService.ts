import axios from 'axios';

export default class RestService<T> {
  url: string;

  constructor(url: string) {
    this.url = url;
  }

  async getAll(token?: string, params?: any): Promise<T[]> {
    const config = {
      params,
      headers: {
        Authorization: `bearer ${token}`,
      },
    };

    const response = await axios.get(this.url, config);
    const result = response.data as T[];

    return result;
  }

  async get(id: string, token?: string): Promise<T> {
    const config = {
      headers: {
        Authorization: `bearer ${token}`,
      },
    };

    const response = await axios.get(`${this.url}/${id}`, config);
    const result = response.data as T;

    return result;
  }
}
