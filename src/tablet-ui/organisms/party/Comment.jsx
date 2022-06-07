import React from 'react';
import styled from 'styled-components';

import Wrapper from 'tablet-ui/atoms/Wrapper';
import Typography from 'tablet-ui/atoms/Typography';
import Profile from 'tablet-ui/organisms/Profile';

import {Colar100, Black40} from 'assets/colorSet';
const Comment = ({
  nickName,
  commentId,
  comment,
  parentId,
  parentName,
  _onClick,
}) => {
  return (
    <React.Fragment>
      <Wrapper margin="16px 0">
        <Typography fontSize="14px" fontWeight="600" color={Colar100}>
          {parentName}
        </Typography>
        <Typography w="632px" fontSize="14px">
          {comment}
        </Typography>
      </Wrapper>
      {parentName ? (
        ''
      ) : (
        <Reply onClick={() => _onClick({nickName, commentId, parentId})}>
          답글달기
        </Reply>
      )}
    </React.Fragment>
  );
};
const Reply = styled.p`
  font-size: 12px;
  color: ${Black40};
  display: inline;
`;

export default Comment;
