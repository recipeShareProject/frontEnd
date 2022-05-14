import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  posts: [
    {
      title: '',
      category: '',
      imagePath: [],
      content: '',
      tag: [],
      expiredAt: '',
      loaction: '',
    },
  ],
};

const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {
    setPost: (state, action) => {
      state.posts = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const postActions = postSlice.actions;

export default postSlice.reducer;
