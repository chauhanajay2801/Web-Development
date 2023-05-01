const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
    value: 0
}

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducer: {
        increment: (state) => {
            state.value +=1
        },
        decrement: (state) => {
            state.value -=1
        },
        // in the earlier days we use ---- action => action.TYPE, action.payload
        incrementByValue: (state,action) => {
            state.value += action.payload
        }   

    }
})

