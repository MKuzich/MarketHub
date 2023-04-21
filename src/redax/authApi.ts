import { createApi } from '@reduxjs/toolkit/query/react';
import {
  IUserCreate,
  IUserLogIn,
  IAuthResponse,
  IUserEmail,
  IUserResetPassword,
  IUserChangePassword,
} from '../types/user.type';

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
    logOut: builder.query<boolean, void>({
      query: () => '/logout',
      providesTags: ['Auth'],
    }),
    verifyToken: builder.query<boolean, string>({
      query: verificationToken => `/verify/${verificationToken}`,
      providesTags: ['Auth'],
    }),
    verify: builder.mutation<boolean, IUserEmail>({
      query: value => ({
        url: '/verify',
        method: 'PATCH',
        body: value,
      }),
      invalidatesTags: ['Auth'],
    }),
    forgotPassword: builder.mutation<boolean, IUserEmail>({
      query: value => ({
        url: '/forgot-password',
        method: 'PATCH',
        body: value,
      }),
      invalidatesTags: ['Auth'],
    }),
    resetPassword: builder.mutation<boolean, IUserResetPassword>({
      query: ({ resetToken, passwordId, newPassword }) => ({
        url: `/reset-password/${resetToken}/${passwordId}`,
        method: 'POST',
        body: { newPassword },
      }),
      invalidatesTags: ['Auth'],
    }),
    changePassword: builder.mutation<boolean, IUserChangePassword>({
      query: value => ({
        url: '/change-password',
        method: 'PATCH',
        body: value,
      }),
      invalidatesTags: ['Auth'],
    }),
    changeEmail: builder.mutation<boolean, IUserEmail>({
      query: value => ({
        url: '/change-email',
        method: 'PATCH',
        body: value,
      }),
      invalidatesTags: ['Auth'],
    }),
    resetEmail: builder.query<boolean, void>({
      query: emailChangeToken => `/reset-email/${emailChangeToken}`,
      providesTags: ['Auth'],
    }),
  }),
});

export const {
  useSignUpMutation,
  useLogInMutation,
  useLogOutQuery,
  useVerifyTokenQuery,
  useVerifyMutation,
  useForgotPasswordMutation,
  useResetPasswordMutation,
  useChangePasswordMutation,
  useChangeEmailMutation,
  useResetEmailQuery,
} = authApi;
