import { createSlice } from "@reduxjs/toolkit";

const authContext = createSlice({
  name: "auth",
  initialState: { auth: false, token: null },
  reducers: {
    login(state) {
      state.auth = true;
    },
    logout(state) {
      state.auth = false;
    },
  },
});

export const authAction = authContext.actions;

export default authContext;
