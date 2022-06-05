import {Box} from '@mui/material';
import {Black40} from 'assets/colorSet';

import React from 'react';

import Typography from 'tablet-ui/atoms/Typography';
import PartyPost from 'tablet-ui/organisms/party/PartyPost';
import Grid from 'tablet-ui/atoms/Grid';
import Wrapper from 'tablet-ui/atoms/Wrapper';

import {useDispatch, useSelector} from 'react-redux';
import {getMyPost} from 'redux/slices/userSlice';
const PartyTabTemplate = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.user.myPosts);
  React.useEffect(() => {
    dispatch(getMyPost());
  }, [dispatch]);
  return (
    <Wrapper>
      <Grid columns="repeat(3,1fr)">
        {posts.map((v) => (
          <PartyPost
            key={v.postId}
            id={v.postId}
            title={v.title}
            address={v.address}
            category={v.category}
            // Todo: 이미지, expriedAt입력받기
          />
        ))}
        <PartyPost />
        <PartyPost />
        <PartyPost />
        <PartyPost />
        <PartyPost />
        <PartyPost />
      </Grid>
      <Typography color={Black40} fontSize="12px">
        2022년 5월 21일
      </Typography>

      <Typography color={Black40} fontSize="12px">
        2022년 5월 20일
      </Typography>
    </Wrapper>
  );
};

export default PartyTabTemplate;
