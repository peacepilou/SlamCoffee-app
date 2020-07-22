import { Menu } from './menu';

export class Review {
  id: number;
  description: string;
  score: number;
  menu?;aux; menus: Menu;
  name: string;
  mail?: string;
}
