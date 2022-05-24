import React from 'react';
import styled from 'styled-components';

import Wrapper from 'ui/atoms/Wrapper';
import Typography from 'ui/atoms/Typography';
import Profile from 'ui/organisms/Profile';

import {Colar100, Black40, Black20} from 'assets/colorSet';
const Comment = ({_onClick}) => {
  return (
    <React.Fragment>
      <Profile nickName="닉네임" location="OO동" />
      <Wrapper margin="16px 0">
        <Typography color={Colar100}>닉네임</Typography>
        <Typography fontSize="14px">
          숟가락을 이용해 전복 살과 껍질을 분리하고 내장도 조심스럽게 떼어
          내세요. 내장은 버리지 말고 죽이나 찌개 등에 넣어 드셔도 좋아요.
        </Typography>
      </Wrapper>
      <Reply onClick={() => _onClick('닉네임')}>답글달기</Reply>
    </React.Fragment>
  );
};

const Reply = styled.div`
  font-weight: 400;
  font-size: 12px;
  line-height: 130%;
  color: ${Black40};
`;
export default Comment;
