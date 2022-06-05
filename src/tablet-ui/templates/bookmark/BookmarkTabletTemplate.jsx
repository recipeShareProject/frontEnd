import React from 'react';

import Header from 'tablet-ui/templates/header/TabletHeader';
import Wrapper from 'tablet-ui/atoms/Wrapper';
import Typography from 'tablet-ui/atoms/Typography';
import Divider from 'tablet-ui/atoms/Divider';
import TabletWrapper from 'tablet-ui/atoms/TabletWrapper';
import MainBannerImg from 'tablet-ui/organisms/MainBannerImg';
import Grid from 'tablet-ui/atoms/Grid';
import NotFound from 'tablet-ui/templates/NotFound';

import {Black40} from 'assets/colorSet';
const BookmarkTabletTemplate = () => {
  return (
    <TabletWrapper>
      <Header />
      <Wrapper padding="72px 64px 0 64px">
        <Wrapper display="flex" align="center">
          <Typography fontSize="20px" fontWeight="600" margin="0 8px 0 0">
            북마크
          </Typography>
          <Typography color={Black40} fontSize="14px">
            n개
          </Typography>
        </Wrapper>
      </Wrapper>
      <Divider />
      <Wrapper padding="0 64px">
        <Grid>
          <MainBannerImg width="310px" height="235px" />
          <MainBannerImg width="310px" height="235px" />
          <MainBannerImg width="310px" height="235px" />
          <MainBannerImg width="310px" height="235px" />
        </Grid>
        {/* TODO: 북마크 없을때 */}
        {/* <NotFound desc="북마크가 존재하지 않아요" /> */}
      </Wrapper>
    </TabletWrapper>
  );
};

export default BookmarkTabletTemplate;
