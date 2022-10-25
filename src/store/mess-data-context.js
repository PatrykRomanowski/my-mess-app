import { createSlice } from "@reduxjs/toolkit";

const userDataMessContext = createSlice({
  name: "data",
  initialState: {
    userId: null,
    userName: null,
  },

  reducers: {
    addNameUser(state, action) {
      const fetchData = () => {
        // const response = await fetch(action.payload.url + "myUsers/" + action.payload.userId + '.json');
        // const responseData = await response.json().then((res) => state.userName = res.name);
        // console.log(responseData.name);
        // state.userName = responseData.name;
      };

      fetchData();
    },

    addUserId(state, action) {
      state.userId = action.payload.date;
    },

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
