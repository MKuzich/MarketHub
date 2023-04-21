export interface IReview {
  _id: string;
  date: Date;
  owner: string;
  product: string;
  title: string;
  text: string;
  rate: number;
}

export interface IReviewCreate {
  product: string;
  title: string;
  text: string;
  rate: number;
}

export interface IReviewChange {
  title?: string;
  text?: string;
  rate?: number;
}
