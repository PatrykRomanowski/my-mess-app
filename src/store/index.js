import { configureStore } from "@reduxjs/toolkit";

import authContext from "./auth-context";
import dataMessContext from "./mess-data-context";
import dataItemsContext from "./items-data-context";

const store = configureStore({
  reducer: {
    auth: authContext.reducer,
    dataMess: dataMessContext.reducer,
<<<<<<< HEAD
=======
    itemsData: dataItemsContext.reducer,
>>>>>>> 15d9e7832bf7c6e324e7c1b510671a83b198f478
  },
});

export default store;
