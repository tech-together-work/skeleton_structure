import { State } from './state';

export interface Country {
  _id: string;
  description: string;
  image: null | Image;
  slug: string;
  states: State[] | null;
  title: string;
}

export interface Image {
  asset: {
    _ref: string;
    _type: string;
  };
}
