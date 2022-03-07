import React from 'react';
import {Image, ImageBackground, Text, View} from 'react-native';

import {Item} from '@models/carouselModels';

import {styles} from './styles';

type ItemCarouselProps = {
  item: Item;
  type: 'thumb' | 'poster';
};

export const ItemCarousel = ({item, type}: ItemCarouselProps) => {
  return (
    <View
      style={
        type === 'poster' ? styles.posterContainer : styles.thumbContainer
      }>
      {type === 'poster' && (
        <ImageBackground
          style={styles.imagePost}
          source={{uri: item.imageUrl}}>
          <Text style={styles.textPost}>{item.title}</Text>
        </ImageBackground>
      )}

      {type === 'thumb' && (
        <>
          <Image
            style={styles.imageThumb}
            source={{uri: item.imageUrl}}></Image>
          <Text style={styles.textThumb}>{item.title}</Text>
        </>
      )}
    </View>
  );
};
