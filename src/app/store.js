/**
 * how to create store in redux and how to use redux-starter-kit
 */
//1)import configureStore from '@reduxjs/toolkit'
import { configureStore } from '@reduxjs/toolkit';
//2)export the configureStore as store to provider in index.js
import postsReducer from '../features/posts/postsSlice';
import usersReducer from '../features/users/usersSlice';
export const store = configureStore({
  reducer: {
    posts: postsReducer,
    users: usersReducer,
  },
});
