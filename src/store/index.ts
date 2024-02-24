import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./reducers"; // assuming you have defined rootReducer

const store = configureStore({
  reducer: rootReducer,
  // Add middleware, enhancers, and other store configurations here if needed
});

export default store;
