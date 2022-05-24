import React from 'react';
import styled from 'styled-components';
import SendIcon from 'common/icons/SendIcon';
import {Colar100, Black20} from 'assets/colorSet';
const CommentInput = ({content, _onClick}) => {
  return (
    <InputWrapper onClick={() => _onClick('')} content={content}>
      <StyleInput placeholder="댓글을 남겨보세요" />
      <SendIcon />
    </InputWrapper>
  );
};
const InputWrapper = styled.div`
  width: 100%;
  height: 65px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 1rem;
  box-sizing: border-box;
  border-top: 1px solid ${Black20};
  border-bottom: 1px solid ${Black20};
  font-size: 14px;
  background: white;

  position: fixed;
  bottom: 0;

  &:before {
    content: '${(props) => props.content}';
    color: ${Colar100};
    font-size: 12px;
    width: ${(props) => (props.content ? '3rem' : '')};
  }
`;

const StyleInput = styled.input`
  width: 100%;
  border: none;
  background: none;
`;
export default CommentInput;
