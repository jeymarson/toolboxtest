import React from 'react';
import {ActivityIndicator, SafeAreaView, View, Text} from 'react-native';

import {Carousel} from '@models/carouselModels';

import {styles} from './styles';

type HomeLayoutProps = {
  carousels: Carousel[];
  loading: boolean;
};

export const HomeLayout = ({carousels, loading}: HomeLayoutProps) => {
  return (
    <SafeAreaView style={[styles.container, loading && styles.loading]}>
      {loading ? <ActivityIndicator /> : <Text>Home</Text>}
    </SafeAreaView>
  );
};
