import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import userApi from 'api/userApi';
import {setCookie, getCookie, deleteCookie} from 'common/presenters/Cookie';

export const getMyRecipe = createAsyncThunk('user/getMyRecipe', async () => {
  const response = await userApi.getMyBoardAxios();

  return response.data;
});
export const getMyPost = createAsyncThunk('user/getMyPost', async () => {
  const response = await userApi.getMyPostAxios();

  return response.data.content;
});
export const getMyComment = createAsyncThunk('user/getMyComment', async () => {
  const response = await userApi.getMyCommentAxios();

  return response.data.content;
});

export const getInfo = createAsyncThunk('user/getInfo', async (data) => {
  const response = await userApi.getInfoAxios();

  return response;
});
export const logout = createAsyncThunk('user/logout', async (data) => {
  const response = await userApi.logoutAxios();

  return response;
});
const initialState = {
  user: {
    nickName: '',
    profilUrl: '',
    location: '',
    lat: '',
    lon: '',
  },
  myRecipes: [],
  myPosts: [],
  myComment: [],
};

const imgSlice = createSlice({
  name: 'img',
  initialState,
  reducers: {
    addCompleteImg: (state, {payload}) => {
      const idx = payload.idx;
      const img = payload.img;

      state.completeImgs[idx] = img;
    },
    delCompleteImg: (state, {payload}) => {
      state.completeImgs = state.completeImgs.filter(
        (val, idx) => idx !== payload,
      );
    },
    setCompleteImg: (state, {payload}) => {
      state.completeImgs = ['', '', '', '', ''];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getInfo.fulfilled, (state, {payload}) => {
      console.log(payload);
      //Todo:서버개발중
      // state.post.comment.push(payload);
    });
    builder.addCase(logout.fulfilled, (state, {payload}) => {
      console.log(payload);
      //Todo:서버개발중
      // state.post.comment.push(payload);
    });
    builder.addCase(getMyRecipe.fulfilled, (state, {payload}) => {
      state.myRecipes = payload;
    });
    builder.addCase(getMyPost.fulfilled, (state, {payload}) => {
      //Todo:서버개발중
      // state.post.comment.push(payload);
    });
    builder.addCase(getMyComment.fulfilled, (state, {payload}) => {
      console.log(payload);
      //Todo:서버개발중
      // state.post.comment.push(payload);
    });
  },
});

// Action creators are generated for each case reducer function
export const imgActions = imgSlice.actions;

export default imgSlice.reducer;
