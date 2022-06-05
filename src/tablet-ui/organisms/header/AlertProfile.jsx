import React from 'react';
import Typography from 'tablet-ui/atoms/Typography';
import Image from 'tablet-ui/atoms/Image';
import Wrapper from 'tablet-ui/atoms/Wrapper';

import defaultImg from 'assets/imgs/profile48.png';
import {Black40} from 'assets/colorSet';
const AlertProfile = ({disabled}) => {
  return (
    <Wrapper
      display="flex"
      align="start"
      justify="center"
      padding="0 0 24px 0"
      disabled={disabled}>
      <Image
        height="36px"
        width="36px"
        src={defaultImg}
        radius="50%"
        margin="0 8px 0 0"
      />
      <Wrapper>
        <Typography fontSize="14px" fontWeight="500" margin="0 0 4px 0">
          00님이 나의 글에 댓글을 남겼어요
        </Typography>
        <Typography fontSize="12px" fontWeight="500" margin="0 0 4px 0">
          아직도 나눔하시나요? 저도 받고 싶어요 답 주세요!
        </Typography>
        <Typography
          color={Black40}
          fontSize="12px"
          fontWeight="500"
          margin="0 0 4px 0">
          n분전
        </Typography>
      </Wrapper>
    </Wrapper>
  );
};

export default AlertProfile;
