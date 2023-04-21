import { createApi } from '@reduxjs/toolkit/query/react';
import { IUserCreate, IUserLogIn, IAuthResponse } from '../types/user.type';

import { baseQuery } from './baseQuery';

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: baseQuery('http://localhost:8080/api/auth'),
  tagTypes: ['Auth'],
  endpoints: builder => ({
    signUp: builder.mutation<boolean, IUserCreate>({
      query: value => ({
        url: '/signup',
        method: 'POST',
        body: value,
      }),
      invalidatesTags: ['Auth'],
    }),
    logIn: builder.mutation<IAuthResponse, IUserLogIn>({
      query: value => ({
        url: '/login',
        method: 'POST',
        body: value,
      }),
      invalidatesTags: ['Auth'],
    }),
  }),
});

export const { useSignUpMutation, useLogInMutation } = authApi;
