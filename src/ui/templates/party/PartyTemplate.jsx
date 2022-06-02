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
  const posts = useSelector((state) => state.post.posts);

  const [address, setAddress] = React.useState('');
  const {kakao} = window;
  const geocoder = new kakao.maps.services.Geocoder();
  React.useEffect(() => {
    dispatch(getPosts());
    getAddress();
  }, []);
  const getAddress = () => {
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
        setAddress(adress);
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
            {address}
          </Typography>
        </Wrapper>
        <Typography fontSize="12px" color={Black40} margin="8px 0 24px 0">
          나의 위치를 기준으로 5km 이내의 게시물이 노출돼요
        </Typography>
        {posts.length !== 0 ? (
          posts.map((v) => (
            <PartyPost
              key={v.postId}
              id={v.postId}
              thumnail={v.images[0]}
              category={v.category}
              title={v.title}
              address={v.address}
              time={timeForToday(v.expiredAt, 'party')}
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
