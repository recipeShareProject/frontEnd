import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import recipeApi from 'api/recipeApi';

export const getRecipeList = createAsyncThunk(
  'recipe/getRecipeList',
  async () => {
    const response = await recipeApi.getHomeAxios();

    return response.data.content;
  },
);
export const getFilteredRecipeList = createAsyncThunk(
  'recipe/getFilteredRecipeList',
  async (data) => {
    const response = await recipeApi.getSearchResultAxios(data);

    return response.data;
  },
);

const initialState = {
  recipeList: [],
};

const recipeSlice = createSlice({
  name: 'recipe',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getRecipeList.fulfilled, (state, {payload}) => {
      state.recipeList = payload;
    });
    builder.addCase(getFilteredRecipeList.fulfilled, (state, {payload}) => {
      state.recipeList = payload;
    });
  },
});

export const recipeActions = recipeSlice.actions;

export default recipeSlice.reducer;
