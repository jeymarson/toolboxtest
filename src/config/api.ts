import axios, {AxiosInstance} from 'axios';

import {API_URL} from '@constants/rest';

let client: AxiosInstance;

export const httpClient = (): AxiosInstance => {
  if (!client) {
    client = axios.create({
      baseURL: API_URL,
      timeout: 1000,
    });
  }

  return client;
};

export default httpClient;
