import React from 'react';
import Header from 'tablet-ui/templates/header/TabletHeader';
import SearchBar from 'tablet-ui/organisms/SearchBar';
import Divider from 'tablet-ui/atoms/Divider';
import HeadTitle from 'tablet-ui/atoms/HeadTitle';
import Wrapper from 'tablet-ui/atoms/Wrapper';
import Grid from 'tablet-ui/atoms/Grid';
import Typography from 'tablet-ui/atoms/Typography';
import MainBannerImg from 'tablet-ui/organisms/MainBannerImg';
import TabletWrapper from 'tablet-ui/atoms/TabletWrapper';
import {Black40} from 'assets/colorSet';
import {useSelector} from 'react-redux';

const MainTabletTemplate = () => {
  const recipeList = useSelector((state) => state.recipe.recipeList);
  return (
    <TabletWrapper>
      <Header />
      <Wrapper padding="72px 0 0 0">
        <SearchBar width="420px" margin="0 auto" />
      </Wrapper>
      <Divider />
      <Wrapper padding="0 64px">
        <Wrapper
          display="flex"
          justify="space-between"
          align="end"
          margin="0 0 16px 0">
          <HeadTitle title={'지금 가장\n인기있는 레시피에요'} />
          <Typography fontSize="0.8rem" color={Black40} onClick={() => {}}>
            더보기
          </Typography>
        </Wrapper>
        <Grid>
          {recipeList.slice(0, 6).map((p) => {
            return (
              <MainBannerImg
                width="100%"
                height="235px"
                key={p.id}
                id={p.id}
                cookTime={p.cookTime}
                isBookmark={p.isBookmark}
                title={p.title}
              />
            );
          })}
        </Grid>
      </Wrapper>
      <Divider />
      <Wrapper padding="0 64px 32px 64px">
        <Wrapper
          display="flex"
          justify="space-between"
          align="end"
          margin="0 0 16px 0">
          <HeadTitle title={'빠르게\n만들 수 있어요'} />
          <Typography fontSize="0.8rem" color={Black40} onClick={() => {}}>
            더보기
          </Typography>
        </Wrapper>
        <Grid>
          {recipeList.slice(7, 14).map((p) => {
            return (
              <MainBannerImg
                width="100%"
                height="235px"
                key={p.id}
                id={p.id}
                cookTime={p.cookTime}
                isBookmark={p.isBookmark}
                title={p.title}
              />
            );
          })}
        </Grid>
      </Wrapper>
    </TabletWrapper>
  );
};

export default MainTabletTemplate;
