import React from 'react';
import {Route, Routes} from 'react-router-dom';

import RecipeDetail from 'pages/recipe/RecipeDetail';
import WriteRecipe from 'pages/recipe/WriteRecipe';

const Recipe = () => {
  return (
    <Routes>
      <Route path="/detail" element={<RecipeDetail />} />
      <Route path="/write" element={<WriteRecipe />} />
    </Routes>
  );
};

export default Recipe;
