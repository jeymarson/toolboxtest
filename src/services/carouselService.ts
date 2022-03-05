import {httpClient} from '@config/api';

export const getCarousels = () => httpClient().get('/v1/mobile/data');
