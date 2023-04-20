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
    setCredentials(state, action: PayloadAction<AuthState>) {
      state.accessToken = action.payload.accessToken;
    },
    clearCredentials(state) {
      state.accessToken = null;
    },
  },
});

export const { setCredentials, clearCredentials } = slice.actions;

export default slice.reducer;
