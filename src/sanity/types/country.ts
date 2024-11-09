import { State } from './state';
import { Image } from './common';

export interface Country {
  _id: string;
  title: string;
  slug: string;
  description: string;
  image: null | Image;
  order: number;
  states: State[] | null;
}
