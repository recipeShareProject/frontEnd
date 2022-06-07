import React from 'react';
import styled from 'styled-components';
import Image from 'tablet-ui/atoms/Image';
const ImgSlider = ({Img}) => {
  return (
    <BannerImgGroupWrapper>
      <BannerImgGroup>
        {Img &&
          Img.map(
            (v, idx) =>
              v && (
                <Image
                  key={idx}
                  src={Img[idx]}
                  width="310px"
                  height="235px"
                  radius="8px"></Image>
              ),
          )}
      </BannerImgGroup>
    </BannerImgGroupWrapper>
  );
};

const BannerImgGroupWrapper = styled.div`
  width: 100%;
  overflow: scroll;
`;
const BannerImgGroup = styled.div`
  display: flex;

  & > div:nth-child(n) {
    margin-right: 20px;
    margin-bottom: 0.5rem;
  }
`;
export default ImgSlider;
