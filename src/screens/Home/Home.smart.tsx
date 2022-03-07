import React, {useEffect, useState} from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {AxiosResponse} from 'axios';

import {getCarousels as getCarouselsService} from '@services/carouselService';
import {removeAuth} from '@services/authService';
import {RootStackParamList} from '@config/router';

import {HomeLayout} from './Home.dumb';
import {Carousel, TypeCarousel} from '@models/carouselModels';

type HomeProps = NativeStackScreenProps<RootStackParamList, 'Home'>;

export const Home = ({navigation}: HomeProps) => {
  const [loading, setLoading] = useState(true);
  const [carousels, setCarousels] = useState<Carousel[]>([]);
  const [tabs, setTabs] = useState<{value: TypeCarousel; label: string}[]>([]);

  const getCarousels = async () => {
    setLoading(true);
    const response: AxiosResponse<Carousel[]> = await getCarouselsService();
    console.log({data: response.data});
    setCarousels(response.data);
    setTabs(
      response.data.map(carousel => ({
        label: carousel.title,
        value: carousel.type,
      })),
    );
    setLoading(false);
  };

  const handleLogout = () => {
    removeAuth();
    navigation.push('Login');
  };

  useEffect(() => {
    getCarousels();
  }, []);

  return (
    <HomeLayout
      tabs={tabs}
      carousels={carousels}
      loading={loading}
      onReload={getCarousels}
      onLogout={handleLogout}
    />
  );
};
