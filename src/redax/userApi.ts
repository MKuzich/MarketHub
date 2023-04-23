import { createApi } from '@reduxjs/toolkit/query/react';
import { IUserChangeData, IUser } from '../types/user.type';
import { baseQuery } from './baseQuery';

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: baseQuery('/user'),
  tagTypes: ['User'],
  endpoints: builder => ({
    getCurrent: builder.query<IUser, void>({
      query: () => '/current',
      providesTags: ['User'],
    }),
    changeUserData: builder.mutation<boolean, IUserChangeData>({
      query: value => ({
        url: '/',
        method: 'PATCH',
        body: value,
      }),
      invalidatesTags: ['User'],
    }),
  }),
});

export const { useGetCurrentQuery, useChangeUserDataMutation } = userApi;
