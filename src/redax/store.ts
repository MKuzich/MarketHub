import { configureStore } from '@reduxjs/toolkit';

import authReducer from './authSlice';
import { authApi } from './authApi';
import { categoryApi } from './categoryApi';
import { orderApi } from './orderApi';
import { productApi } from './productApi';
import { reviewApi } from './reviewApi';
import { userApi } from './userApi';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    [authApi.reducerPath]: authApi.reducer,
    [categoryApi.reducerPath]: categoryApi.reducer,
    [orderApi.reducerPath]: orderApi.reducer,
    [productApi.reducerPath]: productApi.reducer,
    [reviewApi.reducerPath]: reviewApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
  },
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware(),
    authApi.middleware,
    categoryApi.middleware,
    orderApi.middleware,
    productApi.middleware,
    reviewApi.middleware,
    userApi.middleware,
  ],
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
