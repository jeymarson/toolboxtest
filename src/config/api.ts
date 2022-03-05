import axios, {AxiosInstance, AxiosRequestHeaders} from 'axios';

import {API_URL} from '@constants/rest';

let client: AxiosInstance;
let authInterceptor = -1;

export const httpClient = (): AxiosInstance => {
  if (!client) {
    client = axios.create({
      baseURL: API_URL,
      timeout: 1000,
    });
  }

  return client;
};

export const addHeaders = (headers: AxiosRequestHeaders) => {
  const instance = httpClient();
  authInterceptor = instance.interceptors.request.use(config => {
    config.headers = {
      ...config.headers,
      ...headers,
    };

    return config;
  });
};

export const removeHeaders = () => {
  const instance = httpClient();
  instance.interceptors.request.eject(authInterceptor);
  authInterceptor = -1;
};
