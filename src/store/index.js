import { configureStore } from "@reduxjs/toolkit";

import authContext from "./auth-context";
import dataMessContext from "./mess-data-context";

const store = configureStore({
  reducer: {
    auth: authContext.reducer,
    dataMess: dataMessContext.reducer,
  },
});

export default store;
