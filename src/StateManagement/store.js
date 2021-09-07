import { configureStore } from "@reduxjs/toolkit";
import combinedReducers from "./reducer.js";

export default configureStore({
  reducer: {
    toDoListsReducer: combinedReducers
  }
});
