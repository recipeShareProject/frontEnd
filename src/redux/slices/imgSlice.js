import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  completeImgs: ['', '', '', '', ''],
  sendCompleteImgs: [],
  processImgs: [],
};

const imgSlice = createSlice({
  name: 'img',
  initialState,
  reducers: {
    setImgs: (state, {payload}) => {
      state.completeImgs[payload.idx] = payload.v;
      state.sendCompleteImgs[payload.idx] = payload.v;
    },
    addCompleteImg: (state, {payload}) => {
      const idx = payload.idx;
      const img = payload.img;

      state.completeImgs[idx] = img;
    },
    addSendCompleteImg: (state, {payload}) => {
      const idx = payload.idx;
      const img = payload.img;
      state.sendCompleteImgs[idx] = img;
    },

    setCompleteImg: (state, {payload}) => {
      state.completeImgs = ['', '', '', '', ''];
    },
    setSendCompleteImg: (state, {payload}) => {
      state.sendCompleteImgs = [];
    },
  },
});

// Action creators are generated for each case reducer function
export const imgActions = imgSlice.actions;

export default imgSlice.reducer;
