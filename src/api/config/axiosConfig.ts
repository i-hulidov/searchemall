import axios, { AxiosError } from 'axios';

import { pokeApiBaseUrl } from 'src/data/constants/urls';

export const api = axios.create({
  baseURL: pokeApiBaseUrl,
});

const errorHandler = (error: AxiosError) => {
  const statusCode = error.response?.status;

  console.error(error, statusCode);

  return Promise.reject(error);
};

api.interceptors.response.use(undefined, (error) => {
  return errorHandler(error);
});
