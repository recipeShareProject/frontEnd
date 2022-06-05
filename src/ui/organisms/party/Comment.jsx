import React from 'react';
import styled from 'styled-components';

import Wrapper from 'ui/atoms/Wrapper';
import Typography from 'ui/atoms/Typography';
import Profile from 'ui/organisms/Profile';

import {Colar100, Black40} from 'assets/colorSet';
const Comment = ({nickName, commentId, comment, _onClick}) => {
  return (
    <React.Fragment>
      <Wrapper margin="16px 0">
        <Typography
          fontSize="14px"
          fontWeight="600"
          color={Colar100}></Typography>
        <Typography fontSize="14px">{comment}</Typography>
      </Wrapper>
      <Reply onClick={() => _onClick({nickName, commentId})}>답글달기</Reply>
    </React.Fragment>
  );
};
const Reply = styled.p`
  font-size: 12px;
  color: ${Black40};
  display: inline;
`;

export default Comment;
