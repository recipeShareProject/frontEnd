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

export const chnageBookmarkStatus = createAsyncThunk(
  'recipe/chnageBookmarkStatus',
  async (id) => {
    const response = await recipeApi.togglebookMarkAxios(id);
    const returnData = {
      response,
      id,
    };
    return returnData;
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
    builder.addCase(chnageBookmarkStatus.fulfilled, (state, {payload}) => {
      console.log(payload);
      const findIndex = state.recipeList.findIndex(
        (recipe) => recipe.id === payload.id,
      );
      state.recipeList[findIndex].isBookmark = payload.response;
    });
  },
});

export const recipeActions = recipeSlice.actions;

export default recipeSlice.reducer;
