import {Box} from '@mui/material';
import {Black40} from 'assets/colorSet';
import PartyPost from 'ui/organisms/party/PartyPost';
import React from 'react';

import Typography from 'ui/atoms/Typography';

import {useDispatch, useSelector} from 'react-redux';
import {getMyComment} from 'redux/slices/userSlice';
const CommentTabTemplate = () => {
  const dispatch = useDispatch();
  const comments = useSelector((state) => state.user.myComments);
  React.useEffect(() => {
    dispatch(getMyComment());
  }, [dispatch]);
  console.log(comments);
  return (
    <Box mt={4}>
      <Typography color={Black40} fontSize="12px">
        2022년 5월 21일
      </Typography>
      {comments.map((v) => (
        <PartyPost
          key={v.commentId}
          id={v.commentId}
          title={v.comment}

          // Todo: 이미지, expriedAt입력받기/>
        />
      ))}

      <PartyPost />
      <PartyPost />

      <Typography color={Black40} fontSize="12px">
        2022년 5월 20일
      </Typography>
      <PartyPost />
      <PartyPost />
      <PartyPost />
    </Box>
  );
};

export default CommentTabTemplate;
