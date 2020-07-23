import { Review } from './review';

export class Menu {
  id: number;
  title: string;
  description: string;
  ingredients: string;
  price: number;
  reviews?: Review[];
}
