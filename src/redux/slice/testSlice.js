import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';

//미들웨어
// const fetchUserById = createAsyncThunk(
//     'users/fetchByIdStatus',
//     async () => {
//   const response = await userAPI.fetchById(userId)
//   return response.data
//     }
//   )

const initialState = {
  value: 0,
};
const testSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const testActions = testSlice.actions;

export default testSlice.reducer;
