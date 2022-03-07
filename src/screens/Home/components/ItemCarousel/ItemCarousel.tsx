import React from 'react';
import {Image, ImageBackground, Text, TouchableOpacity} from 'react-native';

import {Item} from '@models/carouselModels';

import {styles} from './styles';

type ItemCarouselProps = {
  item: Item;
  type: 'thumb' | 'poster';
  onSelect: (item: Item) => void;
};

export const ItemCarousel = ({item, type, onSelect}: ItemCarouselProps) => {
  return (
    <TouchableOpacity
      style={type === 'poster' ? styles.posterContainer : styles.thumbContainer}
      onPress={() => onSelect(item)}>
      {type === 'poster' && (
        <ImageBackground style={styles.imagePost} source={{uri: item.imageUrl}}>
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
    </TouchableOpacity>
  );
};
