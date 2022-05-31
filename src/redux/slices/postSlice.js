import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import postApi from 'api/postApi';

export const getPosts = createAsyncThunk('post/getPosts', async () => {
  const response = await postApi.getPostsAxios();

  return response.data;
});

export const getPost = createAsyncThunk('post/getPost', async (postId) => {
  const response = await postApi.getPostAxios(postId);

  return response.data;
});
export const delPost = createAsyncThunk('post/delPost', async (postId) => {
  const response = await postApi.delPostAxios(postId);

  return response.data;
});
export const addComment = createAsyncThunk(
  'post/addComment',
  async ({postId, data}) => {
    const response = await postApi.writeCommentAxios(postId, data);

    return response;
  },
);

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
  post: {},
};

const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {
    setPost: (state, {payload}) => {
      // state.posts.push(payload);
      state.posts = payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getPosts.fulfilled, (state, {payload}) => {
      state.posts = payload;
    });
    builder.addCase(getPost.fulfilled, (state, {payload}) => {
      state.post = payload;
    });
    builder.addCase(delPost.fulfilled, (state, {payload}) => {
      state.post = {};
    });
    builder.addCase(addComment.fulfilled, (state, {payload}) => {
      state.post.commentList.push(payload);
    });
  },
});

// Action creators are generated for each case reducer function
export const postActions = postSlice.actions;

export default postSlice.reducer;
