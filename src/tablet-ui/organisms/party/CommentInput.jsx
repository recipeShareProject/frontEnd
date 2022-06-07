import React from 'react';
import styled from 'styled-components';
import SendIcon from 'common/icons/SendIcon';
import Typography from 'ui/atoms/Typography';
import {Colar100, Black20} from 'assets/colorSet';

import {useDispatch} from 'react-redux';
import {addComment, addReply} from 'redux/slices/postSlice';
const CommentInput = ({postId, replyData, _onClick}) => {
  const dispatch = useDispatch();
  const w = replyData.nickName !== '' ? '50px' : '';

  const handleInput = (e) => {
    //enter 키코드 = 0
    if (e.key === 'Enter' || e.type === 'click') {
      const data = {
        comment: e.target.value,
      };
      if (replyData.nickName === '') {
        dispatch(addComment({postId, data}));
      } else {
        const commentId = replyData.commentId;
        const parentId = replyData.parentId;

        dispatch(addReply({postId, commentId, parentId, data}));
      }
      e.target.value = '';
    }
  };

  return (
    <React.Fragment>
      <InputWrapper>
        <Typography
          color={Colar100}
          fontSize="12px"
          onClick={() =>
            _onClick({
              nickName: '',
              commentId: '',
              parentId: '',
            })
          }
          w={w}>
          {replyData.nickName}
        </Typography>
        <StyleInput onKeyPress={handleInput} placeholder="댓글을 남겨보세요" />
        <SendIcon onClick={handleInput} />
      </InputWrapper>
    </React.Fragment>
  );
};
const InputWrapper = styled.div`
  width: 768px;
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
  width: 768px;
  border: none;
  background: none;
`;
export default CommentInput;
