import React from 'react';

import Wrapper from 'ui/atoms/Wrapper';
import MainBannerImg from 'ui/organisms/MainBannerImg';
import Grid from 'ui/atoms/Grid';

import {useDispatch, useSelector} from 'react-redux';
import {getMyRecipe} from 'redux/slices/userSlice';
const RecipeTabTemplate = () => {
  const dispatch = useDispatch();
  const recipes = useSelector((state) => state.user.myRecipes);
  React.useEffect(() => {
    dispatch(getMyRecipe());
  }, [dispatch]);
  return (
    <Wrapper padding="1rem">
      <Grid>
        {recipes.map((v) => (
          <MainBannerImg
            width="160px"
            cookTime={v.cookTime}
            key={v.id}
            id={v.id}
            image={v.images[0]}
            title={v.title}
          />
        ))}
      </Grid>
      {/* TODO: 북마크 없을때 */}
      {/* <NotFound desc="북마크가 존재하지 않아요" /> */}
    </Wrapper>
  );
};

export default RecipeTabTemplate;
