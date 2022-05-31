import React from 'react';
import styled from 'styled-components';
import {useNavigate} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';

import {timeForToday} from 'common/presenters/timeForToday';
import {Black40, Colar100} from 'assets/colorSet';
import postAction from 'redux/thunkActions/postAction';
import {getPosts} from 'redux/slices/postSlice';

import WritePencilIcon from 'common/icons/WritePencilIcon';

import Wrapper from 'ui/atoms/Wrapper';
import Header from 'ui/templates/header/Header';
import Navigation from 'ui/templates/navigation/Navigation';
import Typography from 'ui/atoms/Typography';
import PartyPost from 'ui/organisms/PartyPost';
import NotFound from 'ui/templates/NotFound';

const PartyTemplate = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const posts = useSelector((state) => state.post.posts);

  const [location, setLocation] = React.useState('');
  const {kakao} = window;
  const geocoder = new kakao.maps.services.Geocoder();
  React.useEffect(() => {
    dispatch(getPosts());
    getLocation();
  }, []);
  const getLocation = () => {
    if (navigator.geolocation) {
      // GPS를 지원하면
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const coord = new kakao.maps.LatLng(
            // `${position.coords.latitude}`,
            // `${position.coords.longitude}`,
            35.1631,
            129.1636,
          );
          geocoder.coord2Address(coord.getLng(), coord.getLat(), callback);
        },
        (error) => {
          console.error(error);
        },
        {
          enableHighAccuracy: false,
          maximumAge: 0,
          timeout: Infinity,
        },
      );
    } else {
      alert('GPS를 지원하지 않습니다');
    }
  };

  const callback = (result, status) => {
    if (status === kakao.maps.services.Status.OK) {
      navigator.geolocation.getCurrentPosition(async (position) => {
        const adress = result[0].address.region_3depth_name;
        setLocation(adress);
      });
    }
  };

  return (
    <React.Fragment>
      <Header />
      <Wrapper padding="72px 1rem 60px 1rem">
        <Wrapper display="flex" align="center">
          <Typography fontSize="20px" fontWeight="600" margin="0 8px 0 0">
            파티
          </Typography>
          <Typography fontSize="14px" color={Black40}>
            {location}
          </Typography>
        </Wrapper>
        <Typography fontSize="12px" color={Black40} margin="8px 0 24px 0">
          나의 위치를 기준으로 5km 이내의 게시물이 노출돼요
        </Typography>
        {posts.length !== 0 ? (
          posts.map((v, idx) => (
            <PartyPost
              key={v.postId}
              id={v.postId}
              thumnail={v.images[0]}
              category={v.category}
              title={v.title}
              location={v.location}
              time={timeForToday(v.expiredAt, 'party')}
            />
          ))
        ) : (
          <NotFound desc="새로운 게시글이 존재하지 않아요" />
        )}

        <FloatBtn>
          <WritePencilIcon
            onClick={() => {
              navigate('/party/addParty');
            }}
          />
        </FloatBtn>
      </Wrapper>
      <Navigation />
    </React.Fragment>
  );
};

const FloatBtn = styled.div`
  border-radius: 50%;
  background-color: ${Colar100};
  color: white;
  width: 3rem;
  height: 3rem;
  position: fixed;
  left: calc(100% - 4rem);
  top: calc(100% - 8rem);

  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;
`;

export default PartyTemplate;
