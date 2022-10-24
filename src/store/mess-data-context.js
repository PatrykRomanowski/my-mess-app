import { createSlice } from "@reduxjs/toolkit";

<<<<<<< HEAD
const dataMessContext = createSlice({
=======
const userDataMessContext = createSlice({
>>>>>>> 15d9e7832bf7c6e324e7c1b510671a83b198f478
  name: "data",
  initialState: {
    userId: null,
    userName: null,
  },
  reducers: {
<<<<<<< HEAD
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
=======
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
>>>>>>> 15d9e7832bf7c6e324e7c1b510671a83b198f478
    },
  },
});

export const userDataMessAction = userDataMessContext.actions;

<<<<<<< HEAD
export default dataMessContext;
=======
export default userDataMessContext;
>>>>>>> 15d9e7832bf7c6e324e7c1b510671a83b198f478
