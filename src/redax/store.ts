import { configureStore } from '@reduxjs/toolkit';

import authReducer from './authSlice';
import { authApi } from './authApi';
import { categoryApi } from './categoryApi';
import { orderApi } from './orderApi';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    [authApi.reducerPath]: authApi.reducer,
    [categoryApi.reducerPath]: categoryApi.reducer,
    [orderApi.reducerPath]: orderApi.reducer,
  },
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware(),
    authApi.middleware,
    categoryApi.middleware,
    orderApi.middleware,
  ],
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;