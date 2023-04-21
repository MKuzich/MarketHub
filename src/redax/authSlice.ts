import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

type AuthState = {
  accessToken: string | null;
};

const initialState: AuthState = {
  accessToken: null,
};

const slice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAccessToken(state, action: PayloadAction<string | null>) {
      state.accessToken = action.payload;
    },
  },
});

export const { setAccessToken } = slice.actions;

export default slice.reducer;
