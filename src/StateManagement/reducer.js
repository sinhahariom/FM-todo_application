import { createSlice } from "@reduxjs/toolkit";
import { todoListObject } from "./dataStore.js";

export const slicer = createSlice({
    name:"toDoListReducer",
    initialState : todoListObject,
    reducers : {

    }
})

export default slicer.reducer;
