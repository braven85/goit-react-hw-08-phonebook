import { createSlice } from "@reduxjs/toolkit";
import { loginUser, logoutUser, signupUser } from "../../services/api";

const initialToken = localStorage.getItem("token");

const initialState = {
  token: initialToken,
  userData: {},
  loading: false,
  isLoggedIn: false,
};

export const usersSlice = createSlice({
  name: "users",
  initialState,
  extraReducers: {
    [signupUser.pending]: (state) => {
      state.loading = true;
    },
    [signupUser.fulfilled]: (state, action) => {
      const { token, user } = action.payload;
      state.token = token;
      state.userData = user;
      state.isLoggedIn = true;
      state.loading = false;
    },
    [loginUser.pending]: (state) => {
      state.loading = true;
    },
    [loginUser.fulfilled]: (state, action) => {
      const { token, user } = action.payload;
      state.token = token;
      state.userData = user;
      state.isLoggedIn = true;
      state.loading = false;
    },
    [logoutUser.fulfilled]: (state) => {
      state.isLoggedIn = false;
      state.token = null;
      state.userData = {};
    },
  },
});

export default usersSlice.reducer;
