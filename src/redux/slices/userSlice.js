import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import userApi from 'api/userApi';

export const changeInfo = createAsyncThunk('user/changeInfo', async (data) => {
  const response = await userApi.patchMyInfoAxios(data);

  return response;
});
export const getMyRecipe = createAsyncThunk('user/getMyRecipe', async () => {
  const response = await userApi.getMyBoardAxios();

  return response;
});
export const getMyPost = createAsyncThunk('user/getMyPost', async () => {
  const response = await userApi.getMyPostAxios();

  return response.content;
});
export const getMyComment = createAsyncThunk('user/getMyComment', async () => {
  const response = await userApi.getMyCommentAxios();

  return response.content;
});

export const getInfo = createAsyncThunk('user/getInfo', async (data) => {
  const response = await userApi.getmyInfoAxios(data);

  return response;
});
export const logout = createAsyncThunk('user/logout', async (data) => {
  const response = await userApi.logoutAxios();

  return response;
});
const initialState = {
  user: {},
  myRecipes: [],
  myPosts: [],
  myComments: [],
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    changeName: (state, {payload}) => {
      state.user.name = payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getInfo.fulfilled, (state, {payload}) => {
      state.user = payload;
    });
    builder.addCase(logout.fulfilled, (state, {payload}) => {
      if (payload) {
        state.user = {};
      }
    });
    builder.addCase(getMyRecipe.fulfilled, (state, {payload}) => {
      state.myRecipes = payload;
    });
    builder.addCase(getMyPost.fulfilled, (state, {payload}) => {
      state.myPosts = payload;
    });
    builder.addCase(getMyComment.fulfilled, (state, {payload}) => {
      state.myComments = payload;
    });
  },
});

// Action creators are generated for each case reducer function
export const userActions = userSlice.actions;

export default userSlice.reducer;
