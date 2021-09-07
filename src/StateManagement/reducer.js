import { createSlice } from "@reduxjs/toolkit";
import { todoListObject } from "./dataStore.js";

export const slicer = createSlice({
    name:"toDoListReducer",
    initialState : todoListObject,
    reducers : {
        addNewActiveItemIntoList : (state,actions) => {
            state.activeList = [...state.activeList, actions.payload];
            updateAllList(state,actions, 'active');
        },
        addNewCompletedItemIntoList : (state,actions) => {
            state.completedList = [...state.completedList, actions.payload];
            updateAllList(state,actions, 'completed');
        }
    }
})

const updateAllList = (state,actions, type) =>{

    //if the list item exits before, update the type
    [...state.allList].forEach(listItem=>{
        if(listItem.id === actions.payload.id){
            listItem.type = type;
            return;
        }
    })

    //if the list item is a new Item, insert the item
    let newAllItem = [...actions.payload];
    newAllItem.forEach((item)=>{
        return item.type = type;
    });

    state.allList = [...state.allList, newAllItem];
}

export const {addNewActiveItemIntoList,addNewCompletedItemIntoList}  = slicer.actions;
export default slicer.reducer;
