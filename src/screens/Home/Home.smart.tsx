import React, {useEffect, useState} from 'react';

import {getCarousels as getCarouselsService} from '@services/carouselService';

import {HomeLayout} from './Home.dumb';
import {Carousel} from '@models/carouselModels';
import {AxiosResponse} from 'axios';

export const Home = () => {
  const [loading, setLoading] = useState(true);
  const [carousels, setCarousels] = useState<Carousel[]>([]);

  useEffect(() => {
    const getCarousels = async () => {
      const response: AxiosResponse<Carousel[]> = await getCarouselsService();
      console.log({data: response.data})
      setCarousels(response.data);
      setLoading(false);
    };

    getCarousels();
  }, []);

  return <HomeLayout carousels={carousels} loading={loading} />;
};
