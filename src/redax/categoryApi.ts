import { createApi } from '@reduxjs/toolkit/query/react';
import { baseQuery } from './baseQuery';
import { ICategory, ICategoryCreate } from '../types/category.type';

export const categoryApi = createApi({
  reducerPath: 'categoryApi',
  baseQuery: baseQuery('http://localhost:8080/api/categories'),
  tagTypes: ['Category'],
  endpoints: builder => ({
    getAllCategories: builder.query<ICategory[], void>({
      query: () => `/`,
      providesTags: ['Category'],
    }),
    getCategory: builder.query<ICategory, string>({
      query: categoryId => `/${categoryId}`,
      providesTags: ['Category'],
    }),
    addCategory: builder.mutation<ICategory, ICategoryCreate>({
      query: value => ({
        url: '/',
        method: 'POST',
        body: value,
      }),
      invalidatesTags: ['Category'],
    }),
  }),
});

export const {
  useGetAllCategoriesQuery,
  useGetCategoryQuery,
  useAddCategoryMutation,
} = categoryApi;
