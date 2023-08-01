import { createSlice } from "@reduxjs/toolkit";

export const counterData = createSlice({
    name:"counter",
    initialState:{
        value : 0,
    },
    reducers:{
        increment:(state)=>{
            state.value = state.value + 1;
        },
        decrement:(state)=>{
            state.value = state.value - 1;
        },
        resetValue:(state)=>{
            state.value = 0;
        }
    }
}); 

export const { increment, decrement,resetValue } = counterData.actions

export const selectCount = (state) => {
    console.log(state.counter.value);
    return state.counter.value
};

export default counterData.reducer