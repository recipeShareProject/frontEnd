import React from 'react';
import {RecipeImgGroupWrapper} from 'ui/pages/recipe/RecipeDetail';
import {RecipeImgGroup} from 'ui/pages/recipe/RecipeDetail';
import RecipeImg from '../organisms/RecipeImg';

const RecipeImgSlider = () => {
  return (
    <RecipeImgGroupWrapper>
      <RecipeImgGroup>
        <RecipeImg width="160px" height="120px" />
        <RecipeImg width="160px" height="120px" />
        <RecipeImg width="160px" height="120px" />
        <RecipeImg width="160px" height="120px" />
        <RecipeImg width="160px" height="120px" />
      </RecipeImgGroup>
    </RecipeImgGroupWrapper>
  );
};

export default RecipeImgSlider;
