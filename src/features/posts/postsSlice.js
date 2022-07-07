import { createSlice, nanoid } from '@reduxjs/toolkit';
const initialState = [
  {
    id: nanoid(),
    title: 'Learning Redux Toolkit',
    content: "I've heard good things.",
    // date: sub(new Date(), { minutes: 10 }).toISOString(),
    // reactions: {
    //   thumbsUp: 0,
    //   wow: 0,
    //   heart: 0,
    //   rocket: 0,
    //   coffee: 0,
    // },
  },
  {
    id: nanoid(),
    title: 'Slices...',
    content: 'The more I say slice, the more I want pizza.',
    // date: sub(new Date(), { minutes: 5 }).toISOString(),
    // reactions: {
    //   thumbsUp: 0,
    //   wow: 0,
    //   heart: 0,
    //   rocket: 0,
    //   coffee: 0,
    // },
  },
];

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    postAdded: {
      reducer: (state, action) => {
        state.push(action.payload);
      },
      prepare: (title, content, userId) => {
        return {
          payload: {
            id: nanoid(),
            title,
            content,
            userId,
          },
        };
      },
    },
  },
});
export const selectAllPosts = (state) => state.posts;
export const { postAdded } = postsSlice.actions;
export default postsSlice.reducer;
