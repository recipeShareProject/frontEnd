import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import userApi from 'api/userApi';
import {setCookie, getCookie, deleteCookie} from 'common/presenters/Cookie';

export const getInfo = createAsyncThunk('user/getInfo', async (data) => {
  const response = await userApi.getInfoAxios();

  // return response;
  return data;
});
export const logout = createAsyncThunk('user/logout', async (data) => {
  const response = await userApi.logoutAxios();

  // return response;
  return data;
});
const initialState = {
  user: {
    nickName: '',
    profilUrl: '',
    location: '',
    lat: '',
    lon: '',
  },
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
      // state.post.comment.push(payload);
    });
    builder.addCase(logout.fulfilled, (state, {payload}) => {
      console.log(payload);
      // state.post.comment.push(payload);
    });
  },
});

// Action creators are generated for each case reducer function
export const imgActions = imgSlice.actions;

export default imgSlice.reducer;
