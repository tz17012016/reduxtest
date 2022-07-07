/**
 * how to create store in redux and how to use redux-starter-kit
 */
//1)import configureStore from '@reduxjs/toolkit'
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
//2)export the configureStore as store to provider in index.js
export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
