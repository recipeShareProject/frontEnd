const {kakao} = window;
const geocoder = new kakao.maps.services.Geocoder();
const getLocation = () => {
  if (navigator.geolocation) {
    // GPS를 지원하면
    const a = navigator.geolocation.getCurrentPosition(
      (position) => {
        const coord = new kakao.maps.LatLng(
          // `${position.coords.latitude}`,
          // `${position.coords.longitude}`,
          35.1631,
          129.1636,
        );
        return 'coord';
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
    return a;
  } else {
    alert('GPS를 지원하지 않습니다');
  }
};

const callback = function (result, status) {
  if (status === kakao.maps.services.Status.OK) {
    const adress = result[0].address.address_name.split(' ');
  }
};

export {getLocation};
