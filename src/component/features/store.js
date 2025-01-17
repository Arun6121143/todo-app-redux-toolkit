import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./todos/todoSlicer"


const store = configureStore({
  reducer: {
   todo : todoReducer
  },
});

export default store;
