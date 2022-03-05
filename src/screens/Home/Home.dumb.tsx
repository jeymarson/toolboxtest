import React, {useState} from 'react';
import {ActivityIndicator, SafeAreaView, View, Text} from 'react-native';

import {Carousel} from '@models/carouselModels';

import {styles} from './styles';
import {Tabs} from '@components/Tabs';

type HomeLayoutProps = {
  carousels: Carousel[];
  loading: boolean;
  tabs: {value: number; label: string}[];
};

export const HomeLayout = ({carousels, loading, tabs}: HomeLayoutProps) => {
  const [tab, setTab] = useState(1);
  return (
    <SafeAreaView style={[styles.container, loading && styles.loading]}>
      {loading ? (
        <ActivityIndicator />
      ) : (
        <>
          <Tabs onChange={setTab} tabs={tabs} selected={tab} />
        </>
      )}
    </SafeAreaView>
  );
};
