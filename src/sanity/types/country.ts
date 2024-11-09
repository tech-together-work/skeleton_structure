import { State } from './state';

export interface Country {
  _id: string;
  title: string;
  slug: string;
  description: string;
  image: null | Image;
  order: number;
  states: State[] | null;
  
}

export interface Image {
  asset: {
    _ref: string;
    _type: string;
  };
}
