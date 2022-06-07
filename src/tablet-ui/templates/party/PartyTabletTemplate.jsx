import React from 'react';
import {useNavigate} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';

import {timeForToday} from 'common/presenters/timeForToday';
import {Black40} from 'assets/colorSet';
import {getPosts} from 'redux/slices/postSlice';

import Header from 'tablet-ui/templates/header/TabletHeader';
import TabletWrapper from 'tablet-ui/atoms/TabletWrapper';
import Grid from 'tablet-ui/atoms/Grid';
import Wrapper from 'tablet-ui/atoms/Wrapper';
import Typography from 'tablet-ui/atoms/Typography';
import PartyPost from 'tablet-ui/organisms/party/PartyPost';
import NotFound from 'tablet-ui/templates/NotFound';

const PartyTabletTemplate = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const posts = useSelector((state) => state.post.posts);
  const user = useSelector((state) => state.user.user);

  React.useEffect(() => {
    dispatch(getPosts());
  }, []);
  return (
    <TabletWrapper>
      <Header />
      <Wrapper padding="88px 64px 0 64px">
        <Wrapper display="flex" align="center">
          <Typography fontSize="20px" fontWeight="600" margin="0 8px 0 0">
            파티
          </Typography>
          <Typography fontSize="14px" color={Black40}>
            {/* {address} */}
            oo동
          </Typography>
        </Wrapper>
        <Typography fontSize="12px" color={Black40} margin="8px 0 24px 0">
          나의 위치를 기준으로 5km 이내의 게시물이 노출돼요
        </Typography>
        <Grid columns="repeat(3,1fr)">
          <PartyPost />
          <PartyPost />
          <PartyPost />
          <PartyPost />
          <PartyPost />
          <PartyPost />
        </Grid>
        {/* <NotFound desc="새로운 게시글이 존재하지 않아요" /> */}
      </Wrapper>
    </TabletWrapper>
  );
};

export default PartyTabletTemplate;
