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

const MainTabletTemplate = () => {
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
          <MainBannerImg width="310px" height="235px" />
          <MainBannerImg width="310px" height="235px" />
          <MainBannerImg width="310px" height="235px" />
          <MainBannerImg width="310px" height="235px" />
          <MainBannerImg width="310px" height="235px" />
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
          <MainBannerImg width="310px" height="235px" />
          <MainBannerImg width="310px" height="235px" />
          <MainBannerImg width="310px" height="235px" />
          <MainBannerImg width="310px" height="235px" />
          <MainBannerImg width="310px" height="235px" />
        </Grid>
      </Wrapper>
    </TabletWrapper>
  );
};

export default MainTabletTemplate;
