import { createSlice } from "@reduxjs/toolkit";
import { loginUser, registerUser } from "./authOperations";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: {
      email: null,
    },
    token: null,
    isLoggedIn: false,
    fetchError: null,
  },
  reducers: {
    logOut(state) {
      state.user.email = null;
      state.token = null;
      state.isLoggedIn = false;
      state.fetchError = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(registerUser.fulfilled, (state, actions) => {
      state.user.email = actions.payload.user.email;
      state.token = actions.payload.token;
      state.isLoggedIn = true;
      state.fetchError = null;
    });
    builder.addCase(registerUser.rejected, (state, action) => {
      state.fetchError = true;
    });
    builder.addCase(loginUser.fulfilled, (state, actions) => {
      state.user.email = actions.payload.email;
      state.token = actions.payload.token;
      state.isLoggedIn = true;
      state.fetchError = null;
    });
    builder.addCase(loginUser.rejected, (state, action) => {
      state.fetchError = true;
    });
  },
});

export const { logOut } = authSlice.actions;
export default authSlice.reducer;
