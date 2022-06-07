import React from 'react';
import {Box} from '@mui/material';
import {Black40} from 'assets/colorSet';
import NotFound from 'ui/templates/NotFound';
import MainBannerImg from 'tablet-ui/organisms/MainBannerImg';
import styled from 'styled-components';

import Header from 'ui/templates/header/Header';
import Navigation from 'ui/templates/navigation/Navigation';
import Wrapper from 'ui/atoms/Wrapper';
import Typography from 'ui/atoms/Typography';
import Divider from 'ui/atoms/Divider';
import Grid from 'ui/atoms/Grid';

import {useSelector} from 'react-redux';
const BookMarkTemplate = () => {
  const recipeList = useSelector((state) => state.recipe.recipeList);
  return (
    <React.Fragment>
      <Header />
      <Wrapper padding="72px 0 60px 0">
        <Wrapper display="flex" align="center" margin="1rem">
          <Typography fontSize="20px" fontWeight="600" margin="0 8px 0 0">
            북마크
          </Typography>
          <Typography color={Black40} fontSize="14px"></Typography>
        </Wrapper>
        <Divider />
        {/* TODO: 북마크 있을때 */}
        {recipeList ? (
          <Wrapper padding="1rem">
            <Grid>
              {recipeList.map(
                (recipe) =>
                  recipe.isBookmark === true && (
                    <MainBannerImg
                      width="160px"
                      key={recipe.id}
                      id={recipe.id}
                      cookTime={recipe.cookTime}
                      isBookmark={recipe.isBookmark}
                      title={recipe.title}
                    />
                  ),
              )}
            </Grid>
            {/* TODO: 북마크 없을때 */}
          </Wrapper>
        ) : (
          <Wrapper padding="1rem">
            <NotFound desc="북마크가 존재하지 않아요" />
          </Wrapper>
        )}
      </Wrapper>
      <Navigation />
    </React.Fragment>
  );
};
export default BookMarkTemplate;
