/**
 * how to make a slice of the state
 */
//1)import the createSlice function from redux-starter-kit
import { createSlice } from '@reduxjs/toolkit';
//2)initialState: { count: 0 }
const initialState = {
  count: 0,
};
//3)slice: counter
export const counterSlice = createSlice({
  //name of the slice
  name: 'counter',
  //initial state
  initialState,
  //reducer object that contains the reducers
  reducers: {
    //increment fncution
    increment: (state) => {
      state.count += 1;
    },
    //decrement fncution
    decrement: (state) => {
      state.count -= 1;
    },
    reset: (state) => {
      state.count = 0;
    },
    incrementByAmount: (state, action) => {
      state.count += action.payload;
    },
  },
});
//4)export reducers fncutions  increment and decrement from counterSlice.actions;
export const { increment, decrement, incrementByAmount, reset } =
  counterSlice.actions;
//5)export the full reducer for the store;
export default counterSlice.reducer;
