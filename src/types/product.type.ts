export interface IProductsInOrder {
  order: string;
  quantity: number;
}

export interface IProduct {
  _id: string;
  name: string;
  category: string;
  images?: string[];
  price: number;
  promoPrice: number;
  description: string;
  owner: string;
  active: boolean;
  rate: number;
  ordersPerDay: number;
  totalOrders: number;
  date: Date;
  reviews: string[];
  orders: IProductsInOrder[];
  quantity: number;
}

export interface IProductCreate {
  name: string;
  category: string;
  images?: string[];
  price: number;
  promoPrice?: number;
  description: string;
  quantity: number;
}

export interface IProductChangeData {
  name?: string;
  category?: string;
  images?: string[];
  price?: number;
  promoPrice?: number;
  description?: string;
  active?: boolean;
  quantity?: number;
}
