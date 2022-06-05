import React from 'react';
import {useMediaQuery} from 'react-responsive';
import WriteRecipeTemplate from 'ui/templates/recipe/WriteRecipeTemplate';
import WriteRecipeTabletTemplate from 'tablet-ui/templates/recipe/WriteRecipeTabletTemplate';

const WriteRecipe = () => {
  const isTablet = useMediaQuery({query: '(min-width:768px)'});
  const isMobile = useMediaQuery({query: '(max-width:767.5px)'});

  return (
    <div>
      {isMobile && <WriteRecipeTemplate />}
      {isTablet && <WriteRecipeTabletTemplate />}
    </div>
  );
};
export default WriteRecipe;
