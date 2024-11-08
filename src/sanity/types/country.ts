import { State } from './state';

export interface Country {
  _id: string;
  description: string;
  image: null | string;
  slug: string;
  states: State[] | null;
  title: string;
}
