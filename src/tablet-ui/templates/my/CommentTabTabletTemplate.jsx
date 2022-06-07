import React from 'react';

import PartyPost from 'tablet-ui/organisms/party/PartyPost';
import Typography from 'tablet-ui/atoms/Typography';
import Grid from 'tablet-ui/atoms/Grid';
import Wrapper from 'tablet-ui/atoms/Wrapper';
import NotFound from 'tablet-ui/templates/NotFound';

import {useDispatch, useSelector} from 'react-redux';
import {getMyComment} from 'redux/slices/userSlice';
const CommentTabTemplate = () => {
  const dispatch = useDispatch();
  const comments = useSelector((state) => state.user.myComments);
  React.useEffect(() => {
    dispatch(getMyComment());
  }, [dispatch]);

  return (
    <Wrapper>
      {/*todo:서버개발
       <Typography color={Black40} fontSize="12px" margin="0 0 16px 0">
        2022년 5월 21일
      </Typography> */}
      <Grid columns="repeat(3,1fr)">
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
      </Grid>
      {/* <Typography color={Black40} fontSize="12px">
        2022년 5월 20일
      </Typography> */}
    </Wrapper>
  );
};

export default CommentTabTemplate;
