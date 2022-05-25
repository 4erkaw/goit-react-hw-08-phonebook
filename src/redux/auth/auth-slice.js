import { createSlice } from '@reduxjs/toolkit';
import { register, logIn, logOut, refreshUser } from './auth-operations';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefreshingUser: false,
  error: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [register.pending](state) {
      state.error = null;
    },
    [register.fulfilled](state, { payload }) {
      state.user = payload.user;
      state.token = payload.token;
      state.isLoggedIn = true;
      state.error = null;
    },
    [register.rejected](state, { payload }) {
      state.error = payload;
    },
    [logIn.pending](state) {
      state.error = null;
    },
    [logIn.fulfilled](state, { payload }) {
      state.user = payload.user;
      state.token = payload.token;
      state.isLoggedIn = true;
    },
    [logIn.rejected](state, { payload }) {
      state.error = payload;
    },
    [logOut.pending](state, { payload }) {
      state.error = null;
    },
    [logOut.fulfilled](state) {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
    },
    [logOut.rejected](state, { payload }) {
      state.error = payload;
    },
    [refreshUser.pending](state) {
      state.isRefreshingUser = true;
    },
    [refreshUser.fulfilled](state, { payload }) {
      state.user = { ...payload };
      state.isLoggedIn = true;
      state.isRefreshingUser = false;
    },
    [refreshUser.rejected](state) {
      state.isRefreshingUser = false;
    },
  },
});

export default authSlice.reducer;

// export const authSlice = createSlice({
//   name: 'auth',
//   initialState,
//   extraReducers: {
//     [register.fulfilled]: (state, { payload }) => {
//       state.user = payload.user;
//       state.token = payload.token;
//       state.isLoggedIn = true;
//     },
//     [logIn.fulfilled]: (state, { payload }) => {
//       state.user = payload.user;
//       state.token = payload.token;
//       state.isLoggedIn = true;
//     },
//     [logOut.fulfilled]: () => {
//       return initialState;
//     },
//     [refreshUser.fulfilled]: (state, action) => {
//       state.user = action.payload;
//     },
//   },
// });
