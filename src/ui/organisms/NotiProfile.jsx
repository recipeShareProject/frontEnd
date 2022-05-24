import React from 'react';
import styled from 'styled-components';

import Wrapper from 'ui/atoms/Wrapper';
import Typography from 'ui/atoms/Typography';
import AvataImg from 'ui/atoms/AvataImg';
import {Black40} from 'assets/colorSet';
const NotiProfile = ({opacity}) => {
  return (
    <Wrapper opacity={opacity} display="flex" margin="1.5rem 0">
      <AvataImg />
      <Wrapper>
        <Typography margin="0 0 4px 0">
          OO님이 나의 글에 댓글을 남겼어요
        </Typography>
        <Typography fontSize="12px" margin="0 0 4px 0">
          아직도 나눔 하시나요? 저도 받고 싶어요 답 주세요!
        </Typography>

        <Typography fontSize="12px" color={Black40}>
          n분 전
        </Typography>
      </Wrapper>
    </Wrapper>
  );
};

export default NotiProfile;
