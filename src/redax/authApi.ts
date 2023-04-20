import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IUserCreate, IUserLogIn, IAuthResponse } from '../types/user.type';

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:8080/api/auth',
  }),
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
