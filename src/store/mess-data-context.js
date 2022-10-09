import { createSlice } from "@reduxjs/toolkit";

const dataMessContext = createSlice({
  name: "data",
  initialState: {
    userId: null,
    userName: null,
  },
  reducers: {
    addUserName(state, action) {
      state.userName = action.payload.name;
    },

    logoutHandler(state) {
      state.userId = null;
      state.userName = null;
    },

    addUserId(state, action) {
      state.userId = action.payload.date;
      localStorage.setItem("userId", state.userId);
    },
  },
});

export const dataMessAction = dataMessContext.actions;

export default dataMessContext;
