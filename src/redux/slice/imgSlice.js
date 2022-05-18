import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  completeImgs: ['', '', '', '', ''],
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
    delCompleteImg: (state, {payload}) => {
      state.completeImgs = state.completeImgs.filter(
        (val, idx) => idx !== payload,
      );
    },
    setCompleteImg: (state, {payload}) => {
      state.completeImgs = ['', '', '', '', ''];
    },
  },
});

// Action creators are generated for each case reducer function
export const imgActions = imgSlice.actions;

export default imgSlice.reducer;
