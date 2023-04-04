import { IUser } from './user';

export interface IReview {
  id: string;
  date: Date;
  owner: IUser;
  productId: string;
  title: string;
  text: string;
  rate: number;
}
