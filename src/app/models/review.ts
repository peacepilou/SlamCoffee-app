import { Menu } from './menu';
import { User } from './user';

export class Review {
  id: number;
  description: string;
  score: number;
  menu: Menu;
  user?: User;
}
