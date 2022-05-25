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
