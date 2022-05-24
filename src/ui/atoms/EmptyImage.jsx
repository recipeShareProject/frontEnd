import React from 'react';
import styled from 'styled-components';
import {Black10} from 'assets/colorSet';
import EmptyPictureIcon from 'common/icons/EmptyPictureIcon';
const EmptyImage = () => {
  return (
    <EmptyImg>
      <EmptyImgWrapper>
        <EmptyPictureIcon />
        <p>사진을 추가해주세요</p>
      </EmptyImgWrapper>
    </EmptyImg>
  );
};
const EmptyImgWrapper = styled.div`
  height: 248px;
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const EmptyImg = styled.div`
  height: 248px;
  width: 100%;
  background-color: ${Black10};
  border-radius: 8px;

  p {
    margin: 0;
    color: white;
    margin: 7px;
  }
`;
export default EmptyImage;
