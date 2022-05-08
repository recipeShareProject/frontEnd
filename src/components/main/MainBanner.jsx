import React from 'react';
import styled from 'styled-components';
import MainBannerImg from './MainBannerImg';
import {Box} from '@mui/material';

const MainBanner = () => {
  return (
    <Box my={2}>
      <BannerTitleBox>
        <BannerTitle>
          지금 가장 <br />
          인기있는 레시피에요
        </BannerTitle>
        <BannerMore>더보기</BannerMore>
      </BannerTitleBox>
      <BannerImgGroupWrapper>
        <BannerImgGroup>
          <MainBannerImg width="160px" />
          <MainBannerImg width="160px" />
          <MainBannerImg width="160px" />
          <MainBannerImg width="160px" />
          <MainBannerImg width="160px" />
        </BannerImgGroup>
      </BannerImgGroupWrapper>
    </Box>
  );
};

const BannerTitleBox = styled.div`
  justify-content: space-between;
  align-items: end;
  display: flex;
`;
const BannerTitle = styled.p`
  font-size: 1.4rem;
  font-weight: bold;
`;
const BannerMore = styled.p`
  font-size: 0.8rem;
  color: gray;
`;
const BannerImgGroupWrapper = styled.div`
  width: 100%;
  overflow: scroll;
`;
const BannerImgGroup = styled.div`
  display: flex;
`;

export default MainBanner;
