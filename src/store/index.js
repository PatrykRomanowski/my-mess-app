import { configureStore } from "@reduxjs/toolkit";

import authContext from "./auth-context";

const store = configureStore({
  reducer: { auth: authContext.reducer },
});

export default store;
