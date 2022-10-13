import { configureStore } from "@reduxjs/toolkit";

import authContext from "./auth-context";
import dataMessContext from "./mess-data-context";
import dataItemsContext from "./items-data-context";

const store = configureStore({
  reducer: {
    auth: authContext.reducer,
    dataMess: dataMessContext.reducer,
    itemsData: dataItemsContext.reducer,
  },
});

export default store;
