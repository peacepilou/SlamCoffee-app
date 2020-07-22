import { Review } from './review';

export class Menu {
  id: number;
  title: string;
  description: string;
  price: number;
  reviews?: Review[];
}
