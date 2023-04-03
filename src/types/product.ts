import { IUser } from './user';

export interface IProduct {
  id: string;
  name: string;
  category: string;
  image: any;
  price: number;
  promoPrice: number;
  description: string;
  owner: IUser;
  active: boolean;
  rate: number;
}
