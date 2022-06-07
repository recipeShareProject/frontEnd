import React from 'react';

import Header from 'tablet-ui/templates/header/TabletHeader';
import Wrapper from 'tablet-ui/atoms/Wrapper';
import Typography from 'tablet-ui/atoms/Typography';
import Divider from 'tablet-ui/atoms/Divider';
import TabletWrapper from 'tablet-ui/atoms/TabletWrapper';
import MainBannerImg from 'tablet-ui/organisms/MainBannerImg';
import Grid from 'tablet-ui/atoms/Grid';
import NotFound from 'tablet-ui/templates/NotFound';

import {useSelector} from 'react-redux';
const BookmarkTabletTemplate = () => {
  const recipeList = useSelector((state) => state.recipe.recipeList);
  return (
    <TabletWrapper>
      <Header />
      <Wrapper padding="72px 64px 0 64px">
        <Wrapper display="flex" align="center">
          <Typography fontSize="20px" fontWeight="600" margin="0 8px 0 0">
            북마크
          </Typography>
          {/* todo:서버개발 */}
          {/* <Typography color={Black40} fontSize="14px">
            n개
          </Typography> */}
        </Wrapper>
      </Wrapper>
      <Divider />
      <Wrapper padding="0 64px">
        {recipeList ? (
          <Wrapper padding="1rem">
            <Grid>
              {recipeList.map(
                (recipe) =>
                  recipe.isBookmark === true && (
                    <MainBannerImg
                      width="310px"
                      height="235px"
                      key={recipe.id}
                      id={recipe.id}
                      cookTime={recipe.cookTime}
                      isBookmark={recipe.isBookmark}
                      title={recipe.title}
                    />
                  ),
              )}
            </Grid>
          </Wrapper>
        ) : (
          <Wrapper padding="1rem">
            <NotFound desc="북마크가 존재하지 않아요" />
          </Wrapper>
        )}
      </Wrapper>
    </TabletWrapper>
  );
};

export default BookmarkTabletTemplate;
