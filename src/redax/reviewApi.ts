import { createApi } from '@reduxjs/toolkit/query/react';
import { IReview, IReviewCreate, IReviewChange } from '../types/review.type';
import { baseQuery } from './baseQuery';

export const reviewApi = createApi({
  reducerPath: 'reviewApi',
  baseQuery: baseQuery('/reviews'),
  tagTypes: ['Review'],
  endpoints: builder => ({
    getAllReviews: builder.query<IReview[], void>({
      query: () => '/',
      providesTags: ['Review'],
    }),
    getReview: builder.query<IReview, string>({
      query: reviewId => `/${reviewId}`,
      providesTags: ['Review'],
    }),
    addReview: builder.mutation<IReview, IReviewCreate>({
      query: value => ({
        url: '/',
        method: 'POST',
        body: value,
      }),
      invalidatesTags: ['Review'],
    }),
    changeReview: builder.mutation<
      boolean,
      { reviewId: string; data: IReviewChange }
    >({
      query: ({ reviewId, data }) => ({
        url: `/${reviewId}`,
        method: 'PATCH',
        body: data,
      }),
      invalidatesTags: ['Review'],
    }),
    deleteReview: builder.mutation<boolean, string>({
      query: reviewId => ({
        url: `/${reviewId}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Review'],
    }),
  }),
});

export const {
  useGetAllReviewsQuery,
  useGetReviewQuery,
  useAddReviewMutation,
  useChangeReviewMutation,
} = reviewApi;
