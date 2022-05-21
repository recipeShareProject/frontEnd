import React, {lazy} from 'react';
import {Route, Routes, Outlet} from 'react-router-dom';

import RecipeDetail from 'pages/recipe/RecipeDetail';
import WriteRecipe from 'pages/recipe/WriteRecipe';

//Todo : 중첩 라우팅
const Recipe = () => {
  return (
    <Routes>
      <Route path="/detail" element={<RecipeDetail />} />
      <Route path="/write" element={<WriteRecipe />} />
    </Routes>
    // <div>
    //   <Outlet />
    // </div>
  );
};

export default Recipe;
