import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  tags: [],
};

const tagSlice = createSlice({
  name: 'tag',
  initialState,
  reducers: {
    setTags: (state, {payload}) => {
      state.tags = payload;
    },
    addTag: (state, {payload}) => {
      state.tags.push(payload);
    },
    delTag: (state, {payload}) => {
      state.tags = state.tags.filter((val, idx) => idx !== payload);
    },
    setTag: (state, {payload}) => {
      state.tags = [];
    },
  },
});

// Action creators are generated for each case reducer function
export const tagActions = tagSlice.actions;

export default tagSlice.reducer;
