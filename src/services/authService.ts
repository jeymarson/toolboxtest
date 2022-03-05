import httpClient from '@config/api';

export const login = (data: {sub: string}) =>
  httpClient().post('/v1/mobile/auth', data);
