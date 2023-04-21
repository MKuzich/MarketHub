import { createApi } from '@reduxjs/toolkit/query/react';
import { IOrder, IOrderCreate, IOrderChange } from '../types/order.type';
import { baseQuery } from './baseQuery';

export const orderApi = createApi({
  reducerPath: 'orderApi',
  baseQuery: baseQuery('http://localhost:8080/api/orders'),
  tagTypes: ['Order'],
  endpoints: builder => ({
    getAllOrders: builder.query<IOrder[], void>({
      query: () => '/',
      providesTags: ['Order'],
    }),
    getOrder: builder.query<IOrder, string>({
      query: orderId => `/${orderId}`,
      providesTags: ['Order'],
    }),
    addOrder: builder.mutation<IOrder, IOrderCreate>({
      query: value => ({
        url: '/',
        method: 'POST',
        body: value,
      }),
      invalidatesTags: ['Order'],
    }),
    changeOrder: builder.mutation<
      boolean,
      { orderId: string; data: IOrderChange }
    >({
      query: ({ orderId, data }) => ({
        url: `/${orderId}`,
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['Order'],
    }),
  }),
});

export const {
  useGetAllOrdersQuery,
  useGetOrderQuery,
  useAddOrderMutation,
  useChangeOrderMutation,
} = orderApi;
