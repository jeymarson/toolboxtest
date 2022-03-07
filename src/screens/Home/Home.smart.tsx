import React, {useEffect, useState} from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {AxiosResponse} from 'axios';

import {getCarousels as getCarouselsService} from '@services/carouselService';
import {Carousel, Item} from '@models/carouselModels';
import {removeAuth} from '@services/authService';
import {RootStackParamList} from '@config/router';

import {HomeLayout} from './Home.dumb';

type HomeProps = NativeStackScreenProps<RootStackParamList, 'Home'>;

export const Home = ({navigation}: HomeProps) => {
  const [loading, setLoading] = useState(true);
  const [carousels, setCarousels] = useState<Carousel[]>([]);
  const [tabs, setTabs] = useState<{value: number; label: string}[]>([]);

  const getCarousels = async () => {
    setLoading(true);
    const response: AxiosResponse<Carousel[]> = await getCarouselsService();
    setCarousels(response.data);
    setTabs(
      response.data.map((carousel, index) => ({
        label: carousel.title,
        value: index + 1,
      })),
    );
    setLoading(false);
  };

  const handleLogout = () => {
    removeAuth();
    navigation.push('Login');
  };

  const handleSelectItem = (item: Item) => {
    navigation.navigate('VideoPayer', {title: item.title, url: item.videoUrl});
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
      onSelectItem={handleSelectItem}
    />
  );
};
