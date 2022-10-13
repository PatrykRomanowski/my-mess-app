import { createSlice } from "@reduxjs/toolkit";

const userDataMessContext = createSlice({
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

export const userDataMessAction = userDataMessContext.actions;

export default userDataMessContext;
