import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import postApi from 'api/postApi';

export const getPosts = createAsyncThunk('post/getPosts', async () => {
  const response = await postApi.getPostsAxios();

  return response;
});

export const getPost = createAsyncThunk('post/getPost', async (postId) => {
  const response = await postApi.getPostAxios(postId);

  return response;
});
export const delPost = createAsyncThunk('post/delPost', async (postId) => {
  const response = await postApi.delPostAxios(postId);

  return response.data;
});
export const addComment = createAsyncThunk(
  'post/addComment',
  async ({postId, data}) => {
    const response = await postApi.writeCommentAxios(postId, data);

    return response.data;
  },
);
export const addReply = createAsyncThunk(
  'post/addReply',
  async ({postId, commentId, parentId, data}) => {
    const response = await postApi.writeReplyAxios(postId, commentId, data);

    const sendData = {response, parentId};
    return sendData;
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
    addPost: (state, {payload}) => {
      state.posts.push(payload);
    },
    updatePost: (state, {payload}) => {
      const findIndex = state.posts.findIndex(
        (post) => post.postId === payload.postId,
      );
      state.posts[findIndex] = payload;
    },
    setPost: (state, {payload}) => {
      state.posts = payload;
    },
    deletePost: (state, {payload}) => {
      console.log(payload);
      const filterArray = state.posts.filter(
        (post) => post.postId.toString() !== payload,
      );
      console.log(filterArray);
      state.posts = filterArray;
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
      state.post.commentList.unshift(payload);
    });
    builder.addCase(addReply.fulfilled, (state, {payload}) => {
      const findIndex = state.post.commentList.findIndex(
        (comment) => comment.id === payload.parentId,
      );

      state.post.commentList[findIndex].childList.push(payload.response);
    });
  },
});

// Action creators are generated for each case reducer function
export const postActions = postSlice.actions;

export default postSlice.reducer;
