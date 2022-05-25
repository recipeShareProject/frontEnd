import React from 'react';
import Box from 'ui/atoms/Box';
import Typography from 'ui/atoms/Typography';
import RecipeImg from 'ui/organisms/RecipeImg';

const RecipeDetailProcessSection = () => {
  return (
    <Box mt={20} padding="1rem">
      <Typography fontWeight="bold" margin="0px 1rem 0px 0px">
        레시피
      </Typography>
      <Typography margin="20px 0px" fontSize="14px">
        숟가락을 이용해 전복 살과 껍질을 분리하고 내장도 조심스럽게 떼어 내세요.
        내장은 버리지 말고 죽이나 찌개 등에 넣어 드셔도 좋아요.
      </Typography>
      <RecipeImg width="100%" height="250px" />
      <Typography margin="20px 0px" fontSize="14px">
        숟가락을 이용해 전복 살과 껍질을 분리하고 내장도 조심스럽게 떼어 내세요.
        내장은 버리지 말고 죽이나 찌개 등에 넣어 드셔도 좋아요.
      </Typography>
      <RecipeImg width="100%" height="250px" />
      <Typography margin="20px 0px" fontSize="14px">
        숟가락을 이용해 전복 살과 껍질을 분리하고 내장도 조심스럽게 떼어 내세요.
        내장은 버리지 말고 죽이나 찌개 등에 넣어 드셔도 좋아요.
      </Typography>
      <RecipeImg width="100%" height="250px" />
    </Box>
  );
};

export default RecipeDetailProcessSection;
