import React, {useEffect, useState} from 'react';

import {getCarousels as getCarouselsService} from '@services/carouselService';

import {HomeLayout} from './Home.dumb';
import {Carousel} from '@models/carouselModels';
import {AxiosResponse} from 'axios';

export const Home = () => {
  const [loading, setLoading] = useState(true);
  const [carousels, setCarousels] = useState<Carousel[]>([]);
  const [tabs, setTabs] = useState<{value: number; label: string}[]>([]);

  useEffect(() => {
    const getCarousels = async () => {
      const response: AxiosResponse<Carousel[]> = await getCarouselsService();
      console.log({data: response.data});
      setCarousels(response.data);
      setTabs(
        response.data.map((carousel, index) => ({
          label: carousel.title,
          value: index + 1,
        })),
      );
      setLoading(false);
    };

    getCarousels();
  }, []);

  return <HomeLayout tabs={tabs} carousels={carousels} loading={loading} />;
};
