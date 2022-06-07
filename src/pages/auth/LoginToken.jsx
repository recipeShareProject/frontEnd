import React from 'react';
import {useSearchParams, useNavigate} from 'react-router-dom';
import {setCookie} from 'common/presenters/Cookie';
import {useDispatch} from 'react-redux';

import {getInfo} from 'redux/slices/userSlice';
const LoginToken = () => {
  const dispatch = useDispatch();
  const [params] = useSearchParams();
  const navigate = useNavigate();
  const {kakao} = window;
  const geocoder = new kakao.maps.services.Geocoder();
  const getAddress = () => {
    if (navigator.geolocation) {
      // GPS를 지원하면
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const coord = new kakao.maps.LatLng(
            `${position.coords.latitude}`,
            `${position.coords.longitude}`,
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
        const longitude = position.coords.longitude.toString();
        const latitude = position.coords.latitude.toString();
        const address = result[0].address.region_3depth_name;
        dispatch(getInfo({longitude, latitude, address}));
        navigate('/');
      });
    }
  };
  React.useEffect(() => {
    const token = params.get('token');
    console.log(token);
    if (token) {
      setCookie('token', token);
      getAddress();
    } else {
      navigate('/auth/login');
    }
  }, []);
  return <div></div>;
};

export default LoginToken;
