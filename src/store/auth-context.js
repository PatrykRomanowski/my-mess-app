import {
  createSlice
} from "@reduxjs/toolkit";



const authContext = createSlice({
  name: "auth",
  initialState: {
    auth: false,
    token: null,
  },
  reducers: {
    checkLogin(state) {
      state.token = localStorage.getItem("token");
      console.log(localStorage.getItem("token"));
      state.auth = !!state.token;
    },

    login(state, action) {
      state.auth = !!action.payload.token;
      localStorage.setItem("token", action.payload.token);
      console.log(localStorage.getItem("token"));
    },
    logout(state) {
      state.auth = false;
      state.token = null;
      localStorage.removeItem("token");
    },
  },
});

export const authAction = authContext.actions;

export default authContext;