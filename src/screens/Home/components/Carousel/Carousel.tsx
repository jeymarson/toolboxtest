import React, {useRef} from 'react';
import {Dimensions} from 'react-native';
import AnchorCarousel from 'react-native-anchor-carousel';

import {Carousel as CarouselModel, Item} from '@models/carouselModels';

import {ItemCarousel} from '../ItemCarousel';

type CarouselProps = {
  data: CarouselModel;
  onSelect: (item: Item) => void;
};

export const Carousel = ({data: {type, items}, onSelect}: CarouselProps) => {
  const ref = useRef(null);
  const {width: windowWidth} = Dimensions.get('window');
  return (
    <AnchorCarousel
      ref={ref}
      data={items}
      renderItem={({item}: {item: Item}) => (
        <ItemCarousel item={item} onSelect={onSelect} type={type} />
      )}
      separatorWidth={10}
      containerWidth={windowWidth}
    />
  );
};
