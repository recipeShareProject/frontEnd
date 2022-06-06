import React from 'react';
import {useMediaQuery} from 'react-responsive';
import RecipeDetailTemplate from 'ui/templates/recipe/RecipeDetailTemplate';
import RecipeDetailTabletTemplate from 'tablet-ui/templates/recipe/RecipeDetailTabletTemplate';

const ReciepeDetail = () => {
  const isTablet = useMediaQuery({query: '(min-width:768px)'});
  const isMobile = useMediaQuery({query: '(max-width:767.5px)'});
  return (
    <div>
      {isMobile && <RecipeDetailTemplate />}
      {isTablet && <RecipeDetailTabletTemplate />}
    </div>
  );
};
export default ReciepeDetail;
