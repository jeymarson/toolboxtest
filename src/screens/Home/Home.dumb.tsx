import React, {useState} from 'react';
import {ActivityIndicator, SafeAreaView, View, Text} from 'react-native';

import {Carousel as CarouselModel, TypeCarousel} from '@models/carouselModels';

import {styles} from './styles';
import {Carousel} from './components/Carousel';
import {Tabs} from './components/Tabs';
import {Header} from './components/Header';

type HomeLayoutProps = {
  carousels: CarouselModel[];
  loading: boolean;
  tabs: {value: TypeCarousel; label: string}[];
  onReload: () => void;
  onLogout: () => void;
};

export const HomeLayout = ({
  carousels,
  loading,
  tabs,
  onLogout,
  onReload,
}: HomeLayoutProps) => {
  const [tab, setTab] = useState<TypeCarousel>('thumb');
  return (
    <SafeAreaView style={[styles.mainContainer, loading && styles.loading]}>
      {loading ? (
        <ActivityIndicator />
      ) : (
        <>
          <Header onReload={onReload} onLogout={onLogout} />
          <View style={styles.container}>
            <Tabs
              styles={styles.tabs}
              onChange={setTab}
              tabs={tabs}
              selected={tab}
            />
            <Carousel
              data={
                carousels.find(car => car.type === tab) ?? ({} as CarouselModel)
              }
            />
          </View>
        </>
      )}
    </SafeAreaView>
  );
};
