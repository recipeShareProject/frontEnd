import {Black40} from 'assets/colorSet';
import React from 'react';
import Box from 'ui/atoms/Box';
import Typography from 'ui/atoms/Typography';

const RecipeDetailIngredientSection = () => {
  return (
    <Box mt={40} padding="1rem">
      <Box display="flex" margin="1rem 0px">
        <Typography fontWeight="bold" margin="0px 1rem 0px 0px">
          재료
        </Typography>
        <Typography color={Black40} fontSize="12px">
          n인분
        </Typography>
      </Box>
      <Box display="flex">
        <Box width="50%" height="50px">
          재료명
        </Box>
        <Typography color={Black40}>n개</Typography>
      </Box>
      <Box display="flex">
        <Box width="50%" height="50px">
          재료명
        </Box>
        <Typography color={Black40}>n개</Typography>
      </Box>
      <Box display="flex">
        <Box width="50%" height="50px">
          재료명
        </Box>
        <Typography color={Black40}>n개</Typography>
      </Box>
    </Box>
  );
};

export default RecipeDetailIngredientSection;
