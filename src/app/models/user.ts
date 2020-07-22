import { Review } from './review';

export class User {
  id: number;
  name: string;
  mail: string;
  role: boolean;
  reviews: Review[];
}
