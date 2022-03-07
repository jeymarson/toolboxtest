import React, {useState} from 'react';
import {ActivityIndicator, SafeAreaView, View} from 'react-native';

import {Carousel as CarouselModel, Item} from '@models/carouselModels';

import {Carousel} from './components/Carousel';
import {Header} from './components/Header';
import {Tabs} from './components/Tabs';
import {styles} from './styles';

type HomeLayoutProps = {
  carousels: CarouselModel[];
  loading: boolean;
  tabs: {value: number; label: string}[];
  onSelectItem: (item: Item) => void;
  onReload: () => void;
  onLogout: () => void;
};

export const HomeLayout = ({
  carousels,
  loading,
  tabs,
  onLogout,
  onReload,
  onSelectItem,
}: HomeLayoutProps) => {
  const [tab, setTab] = useState<number>(1);
  return (
    <SafeAreaView style={[styles.mainContainer, loading && styles.loading]}>
      {loading && !carousels.length ? (
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
            <Carousel onSelect={onSelectItem} data={carousels[tab - 1]} />
          </View>
        </>
      )}
    </SafeAreaView>
  );
};
