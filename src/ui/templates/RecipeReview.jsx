import ReviewProfileImg from 'ui/organisms/ReviewProfileImg';
import Typography from 'ui/atoms/Typography';
import RecipeImgSlider from 'ui/organisms/RecipeImgSlider';

const RecipeReview = () => {
  return (
    <div>
      <ReviewProfileImg />
      <RecipeImgSlider />
      <Typography fontSize="14px">
        숟가락을 이용해 전복 살과 껍질을 분리하고 내장도 조심스럽게 떼어 내세요.
        내장은 버리지 말고 죽이나 찌개 등에 넣어 드셔도 좋아요.
      </Typography>
    </div>
  );
};

export default RecipeReview;
