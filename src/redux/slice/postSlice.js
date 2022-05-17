import {createSlice} from '@reduxjs/toolkit';
// {
//   title: '',
//   category: '',
//   imagePath: [],
//   content: '',
//   tag: [],
//   expiredAt: '',
//   loaction: '',
// },
const initialState = {
  posts: [],
};

const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {
    setPost: (state, {payload}) => {
      state.posts.push(payload);
    },
  },
});

// Action creators are generated for each case reducer function
export const postActions = postSlice.actions;

export default postSlice.reducer;
