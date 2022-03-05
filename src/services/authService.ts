import {addHeaders, httpClient, removeHeaders} from '@config/api';
import {LoginRequest} from '@models/loginModels';

export const login = (data: LoginRequest) =>
  httpClient().post('/v1/mobile/auth', data);

export const addAuthHeader = (type: string, token: string) => {
  addHeaders({Authorization: `${type} ${token}`});
};

export const removeAuth = () => {
  removeHeaders();
};
