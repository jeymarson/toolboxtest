export interface Item {
  title: string;
  imageUrl: string;
  videoUrl: string;
  description: string;
}

export interface Carousel {
  title: string;
  type: TypeCarousel;
  items: Item[];
}

export type TypeCarousel = 'thumb' | 'poster';
