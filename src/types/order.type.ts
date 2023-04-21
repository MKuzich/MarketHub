export interface IOrderedProducts {
  product: string;
  amount: number;
}

export interface IOrder {
  _id: string;
  owner: string;
  destination: {
    firstName: string;
    secondName: string;
    phone: string;
    country: string;
    city: string;
    address: string;
  };
  info: string | null;
  products: IOrderedProducts[];
  totalPrice: number;
  priceWithoutPromo: number;
  status: 'Pending' | 'Paid' | 'Shipped' | 'Delivered' | 'Canceled';
  createdAt: Date;
  updatedAt: Date;
}

export interface IOrderCreate {
  destination: {
    firstName: string;
    secondName: string;
    phone: string;
    country: string;
    city: string;
    address: string;
  };
  info?: string;
  products: IOrderedProducts[];
  totalPrice: number;
  priceWithoutPromo: number;
}

export interface IOrderChange {
  destination?: {
    firstName?: string;
    secondName?: string;
    phone?: string;
    country?: string;
    city?: string;
    address?: string;
  };
  info?: string | null;
  products?: IOrderedProducts[];
  totalPrice?: number;
  priceWithoutPromo?: number;
  status?: 'Pending' | 'Paid' | 'Shipped' | 'Delivered' | 'Canceled';
  updatedAt?: Date;
}
