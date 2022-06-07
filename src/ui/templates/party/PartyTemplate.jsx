import React from 'react';
import {useNavigate} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';

import {timeForToday} from 'common/presenters/timeForToday';
import {Black40} from 'assets/colorSet';
import {getPosts} from 'redux/slices/postSlice';

import Wrapper from 'ui/atoms/Wrapper';
import Header from 'ui/templates/header/Header';
import Navigation from 'ui/templates/navigation/Navigation';
import Typography from 'ui/atoms/Typography';
import PartyPost from 'ui/organisms/party/PartyPost';
import NotFound from 'ui/templates/NotFound';
import FloatButton from 'ui/atoms/FloatButton';

const PartyTemplate = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const posts = useSelector((state) => state.post?.posts);
  const user = useSelector((state) => state.user.user);

  React.useEffect(() => {
    // dispatch(getPosts());
  }, []);

  return (
    <React.Fragment>
      <Header />
      <Wrapper padding="72px 1rem 60px 1rem">
        <Wrapper display="flex" align="center">
          <Typography fontSize="20px" fontWeight="600" margin="0 8px 0 0">
            파티
          </Typography>
          <Typography fontSize="14px" color={Black40}>
            {user.address}
          </Typography>
        </Wrapper>
        <Typography fontSize="12px" color={Black40} margin="8px 0 24px 0">
          나의 위치를 기준으로 5km 이내의 게시물이 노출돼요
        </Typography>
        {posts.length !== 0 ? (
          posts.map((v) => (
            <PartyPost
              key={v?.postId}
              id={v?.postId}
              thumnail={v?.images[0]}
              category={v?.category}
              title={v?.title}
              address={v?.address}
              time={timeForToday(v?.expiredAt, 'party')}
            />
          ))
        ) : (
          <NotFound desc="새로운 게시글이 존재하지 않아요" />
        )}

        <FloatButton
          onClick={() => {
            navigate('/party/addParty');
          }}
        />
      </Wrapper>
      <Navigation />
    </React.Fragment>
  );
};

export default PartyTemplate;
