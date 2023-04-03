import axios, { AxiosError } from 'axios';

import { routes } from 'src/data/constants/routes';
import { pokeApiBaseUrl } from 'src/data/constants/urls';

export const api = axios.create({
  baseURL: pokeApiBaseUrl,
});

const errorHandler = (error: AxiosError) => {
  const statusCode = error.response?.status;

  if (statusCode === 404) {
    window.location.href = routes.notFound;
  }

  console.error(error, statusCode);

  return Promise.reject(error);
};

api.interceptors.response.use(undefined, (error) => {
  return errorHandler(error);
});
