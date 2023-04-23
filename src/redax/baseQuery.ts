import { fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { RootState } from './store';
import { setAccessToken } from './authSlice';
import { store } from './store';

const COMMON_URL = 'http://localhost:8080/api';

export const baseQuery = (route: string) =>
  fetchBaseQuery({
    baseUrl: COMMON_URL + route,
    prepareHeaders: (headers, { getState }) => {
      const accessToken = (getState() as RootState).auth.accessToken;
      if (accessToken) {
        headers.set('Authorization', `Bearer ${accessToken}`);
      }
      return headers;
    },
    responseHandler: async (response: any) => {
      const accessToken = response.headers.get('accessToken');

      if (accessToken) {
        const dispatch = store.dispatch;
        await dispatch(setAccessToken(accessToken));
      }

      return response;
    },
  });
