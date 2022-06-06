import React from 'react';
import TabletWrapper from 'tablet-ui/atoms/TabletWrapper';
import Header from 'tablet-ui/templates/header/TabletHeader';
import SearchBar from 'tablet-ui/organisms/SearchBar';
import Wrapper from 'tablet-ui/atoms/Wrapper';
import Divider from 'tablet-ui/atoms/Divider';
import Grid from 'tablet-ui/atoms/Grid';
import MainBannerImg from 'tablet-ui/organisms/MainBannerImg';
import SearchFilterBar from 'tablet-ui/organisms/search/SearchFilterBar';
import {useSelector} from 'react-redux';

const SearchResultTabletTemplate = () => {
  const recipeList = useSelector((state) => state.recipe.recipeList);

  return (
    <TabletWrapper>
      <Header />
      <Wrapper padding="72px 0 0 0">
        <SearchBar width="420px" margin="0 auto" />
        <SearchFilterBar />
      </Wrapper>
      <Divider />

      <Wrapper padding="0 64px">
        <Grid>
          {recipeList.map((p) => {
            return (
              <MainBannerImg
                width="310px"
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

export default SearchResultTabletTemplate;
