import { createApi } from '@reduxjs/toolkit/query/react';
import {
  IProduct,
  IProductCreate,
  IProductChangeData,
} from '../types/product.type';
import { baseQuery } from './baseQuery';

export const productApi = createApi({
  reducerPath: 'productApi',
  baseQuery: baseQuery('http://localhost:8080/api/products'),
  tagTypes: ['Product'],
  endpoints: builder => ({
    getAllProducts: builder.query<IProduct[], void>({
      query: () => '/',
      providesTags: ['Product'],
    }),
    getProduct: builder.query<IProduct, string>({
      query: productId => `/${productId}`,
      providesTags: ['Product'],
    }),
    addProduct: builder.mutation<IProduct, IProductCreate>({
      query: value => ({
        url: '/',
        method: 'POST',
        body: value,
      }),
      invalidatesTags: ['Product'],
    }),
    changeProduct: builder.mutation<
      boolean,
      { productId: string; data: IProductChangeData }
    >({
      query: ({ productId, data }) => ({
        url: `/${productId}`,
        method: 'PATCH',
        body: data,
      }),
      invalidatesTags: ['Product'],
    }),
    deleteProduct: builder.mutation<IProduct, string>({
      query: productId => ({
        url: `/${productId}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Product'],
    }),
  }),
});

export const {
  useGetAllProductsQuery,
  useGetProductQuery,
  useAddProductMutation,
  useChangeProductMutation,
  useDeleteProductMutation,
} = productApi;
