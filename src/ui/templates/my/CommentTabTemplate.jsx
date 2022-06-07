import {Box} from '@mui/material';
import {Black40} from 'assets/colorSet';
import PartyPost from 'ui/organisms/party/PartyPost';
import React from 'react';

import Typography from 'ui/atoms/Typography';
import NotFound from 'ui/templates/NotFound';
import {useDispatch, useSelector} from 'react-redux';
import {getMyComment} from 'redux/slices/userSlice';
const CommentTabTemplate = () => {
  const dispatch = useDispatch();
  const comments = useSelector((state) => state.user.myComments);

  React.useEffect(() => {
    dispatch(getMyComment());
  }, [dispatch]);

  return (
    <Box mt={4}>
      {/* todo:서버개발
      <Typography color={Black40} fontSize="12px">
        2022년 5월 21일
      </Typography> 
        <Typography color={Black40} fontSize="12px">
          2022년 5월 20일
        </Typography>*/}
      {comments ? (
        comments.map((v) => (
          <PartyPost
            key={v.commentId}
            id={v.commentId}
            title={v.comment}
            category="댓글"
            addresses=""
            expiredAt=""

            // Todo: 이미지, expriedAt입력받기/>
          />
        ))
      ) : (
        <NotFound desc="댓글이 존재하지 않아요" />
      )}
    </Box>
  );
};

export default CommentTabTemplate;
