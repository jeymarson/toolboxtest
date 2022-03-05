export interface Item {
  title: string;
  imageUrl: string;
  videoUrl: string;
  description: string;
}

export interface Carousel {
  title: string;
  type: string;
  items: Item[];
}
