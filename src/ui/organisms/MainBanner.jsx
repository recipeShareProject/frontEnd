import React from 'react';
import styled from 'styled-components';
import MainBannerImg from './MainBannerImg';
import Box from 'ui/atoms/Box';
import {useNavigate} from 'react-router-dom';

const Item = ({text}) => {
  return (
    <BannerTitle>
      {text.split('\n').map((txt, idx) => (
        <div key={idx}>
          {txt}
          <br />
        </div>
      ))}
    </BannerTitle>
  );
};
const MainBanner = ({title}) => {
  const navigate = useNavigate();
  return (
    <Box padding="1rem">
      <BannerTitleBox>
        <Item text={title} />
        <BannerMore onClick={() => navigate('/search/result')}>
          더보기
        </BannerMore>
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
  margin: 1.2rem 0px;
`;
const BannerTitle = styled.div`
  font-size: 1.4rem;
  font-weight: bold;
  white-space: pre;
`;
const BannerMore = styled.p`
  font-size: 0.8rem;
  color: gray;
  cursor: pointer;
`;
const BannerImgGroupWrapper = styled.div`
  width: 100%;
  overflow: scroll;
`;
const BannerImgGroup = styled.div`
  display: flex;

  & > div:nth-child(n) {
    margin-right: 0.5rem;
    margin-bottom: 0.5rem;
  }
`;

export default MainBanner;
