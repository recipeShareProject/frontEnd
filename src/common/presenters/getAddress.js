import React from 'react';
const {kakao} = window;
const geocoder = new kakao.maps.services.Geocoder();

const getAddress = () => {
  let test;
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
        const a = geocoder.coord2Address(
          coord.getLng(),
          coord.getLat(),
          callback,
        );
        geocoder.coord2Address(35.1631, 129.1636, b);
        console.log(a);
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

const callback = function (result, status) {
  if (status === kakao.maps.services.Status.OK) {
    const test = result[0].address.region_3depth_name;
    console.log(test);
    return test;
  }
};

const b = (c, d) => {
  console.log(c);
};
export {getAddress};
