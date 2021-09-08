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
        },
        removeTransitionItemFromActiveList : (state, actions) => {
            state.activeList = state.activeList.filter(list=>{
                return list.id != actions.payload.id
            })
        },
        removeTransitionItemFromCompletedList : (state, actions) =>{
            state.completedList = state.completedList.filter(list=>{
                return list.id != actions.payload.id
            })
        }
    }
})

const updateAllList = (state,actions,type) =>{

    let ifExisting = false;

    //if the list item exits before, update the type
    state.allList.forEach(listItem=>{
        if(listItem.id === actions.payload.id){
            ifExisting = true;
            listItem.type = type;
            return;
        }
    })

    if(!ifExisting){
        //if the list item is a new Item, insert the item
        let newAllItem = actions.payload;

        state.allList = [...state.allList, newAllItem];
    }
}

export const {addNewActiveItemIntoList,addNewCompletedItemIntoList,removeTransitionItemFromActiveList, removeTransitionItemFromCompletedList}  = slicer.actions;
export default slicer.reducer;
