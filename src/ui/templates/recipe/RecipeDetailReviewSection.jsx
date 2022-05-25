import {Black40} from 'assets/colorSet';
import React from 'react';
import Box from 'ui/atoms/Box';
import Typography from 'ui/atoms/Typography';
import RecipeReview from '../RecipeReview';

const RecipeDetailReviewSection = () => {
  return (
    <Box mt={20} padding="1rem">
      <Box display="flex">
        <Typography fontWeight="bold" margin="0px 1rem 0px 0px">
          리뷰
        </Typography>
        <Typography color={Black40} fontSize="12px">
          n개
        </Typography>
      </Box>
      <RecipeReview />
      <RecipeReview />
      <RecipeReview />
      <RecipeReview />
    </Box>
  );
};

export default RecipeDetailReviewSection;
