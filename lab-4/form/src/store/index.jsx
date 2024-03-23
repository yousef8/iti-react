import { configureStore } from "@reduxjs/toolkit";
import form from "./slices/form";

const store = configureStore({
  reducer: {
    form,
  },
});

export default store;
