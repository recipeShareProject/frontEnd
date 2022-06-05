import React from 'react';
import {RecipeImgGroupWrapper} from 'ui/templates/recipe/RecipeDetailTemplate';
import {RecipeImgGroup} from 'ui/templates/recipe/RecipeDetailTemplate';
import RecipeImg from '../organisms/RecipeImg';

const RecipeImgSlider = () => {
  return (
    <RecipeImgGroupWrapper>
      <RecipeImgGroup>
        <RecipeImg width="160px" height="120px" borderRadius="4px" />
        <RecipeImg width="160px" height="120px" borderRadius="4px" />
        <RecipeImg width="160px" height="120px" borderRadius="4px" />
        <RecipeImg width="160px" height="120px" borderRadius="4px" />
        <RecipeImg width="160px" height="120px" borderRadius="4px" />
      </RecipeImgGroup>
    </RecipeImgGroupWrapper>
  );
};

export default RecipeImgSlider;
