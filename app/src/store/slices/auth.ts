import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type State = {
  token: string | null;
  refreshToken: string | null;
  isAuthenticated: boolean | false;
};

const initialState: State = { token: null, refreshToken: null, isAuthenticated: false };

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuthTokens(state: State, action: PayloadAction<{ token: string; refreshToken: string }>) {
      state.refreshToken = action.payload.refreshToken;
      state.token = action.payload.token;
      state.isAuthenticated = true;
    },
    setLogout(state: State) {
      state.refreshToken = null;
      state.token = null;
      state.isAuthenticated = false;
    },
  },
});

export default authSlice;
