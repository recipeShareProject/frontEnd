import {RecipeImgGroupWrapper} from 'ui/pages/recipe/RecipeDetail';
import {RecipeImgGroup} from 'ui/pages/recipe/RecipeDetail';
import RecipeImg from '../organisms/RecipeImg';

import ReviewProfileImg from 'ui/organisms/ReviewProfileImg';
import Typography from 'ui/atoms/Typography';

const RecipeReview = () => {
  return (
    <div>
      <ReviewProfileImg />

      <RecipeImgGroupWrapper>
        <RecipeImgGroup>
          <RecipeImg width="160px" height="120px" />
          <RecipeImg width="160px" height="120px" />
          <RecipeImg width="160px" height="120px" />
          <RecipeImg width="160px" height="120px" />
          <RecipeImg width="160px" height="120px" />
        </RecipeImgGroup>
      </RecipeImgGroupWrapper>
      <Typography fontSize="14px">
        숟가락을 이용해 전복 살과 껍질을 분리하고 내장도 조심스럽게 떼어 내세요.
        내장은 버리지 말고 죽이나 찌개 등에 넣어 드셔도 좋아요.
      </Typography>
    </div>
  );
};

export default RecipeReview;
