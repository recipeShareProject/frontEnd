import React from 'react';
import styled from 'styled-components';
import Squre from 'components/common/Squre';

import {useSelector, useDispatch} from 'react-redux';
import {testActions} from 'redux/slice/testSlice';
import postsActions from 'redux/thunkActions/PostsAction';

import {AdapterDayjs} from '@mui/x-date-pickers/AdapterDayjs';
import {LocalizationProvider} from '@mui/x-date-pickers/LocalizationProvider';
import {MobileDatePicker} from '@mui/x-date-pickers/MobileDatePicker';
import {InputAdornment} from '@mui/material';
import TextField from '@mui/material/TextField';
import DateRangeIcon from '@mui/icons-material/DateRange';

import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import dayjs from 'dayjs';

function TestPage() {
  const count = useSelector((state) => state.test.value);
  const post = useSelector((state) => state.post);
  const dispatch = useDispatch();
  const now = dayjs();
  const puls = now.add(5, 'day').$d;
  const start = now.add(1, 'day').$d;

  const [img, setImg] = React.useState();

  const [value, setValue] = React.useState(null);
  const [startDate, setStartDate] = React.useState(start);
  const [startTime, setStartTime] = React.useState(new Date());
  const date = React.useRef();

  const onBtn = () => {
    console.log(date.current.input.value);
  };
  const {kakao} = window;
  const geocoder = new kakao.maps.services.Geocoder();
  const getLocation = () => {
    if (navigator.geolocation) {
      // GPS를 지원하면
      navigator.geolocation.getCurrentPosition(
        (position) => {
          // position 객체 내부에 timestamp(현재 시간)와 coords 객체
          const time = new Date(position.timestamp);
          console.log(position);
          console.log(`현재시간 : ${time}`);
          console.log(`latitude 위도 : ${position.coords.latitude}`);
          console.log(`longitude 경도 : ${position.coords.longitude}`);
          var coord = new kakao.maps.LatLng(
            `${position.coords.latitude}`,
            `${position.coords.longitude}`,
          );

          var a = geocoder.coord2Address(
            coord.getLng(),
            coord.getLat(),
            callback,
          );
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
      console.log(result[0].address.address_name);
    }
  };

  const getImg = () => {
    setImg(
      'https://potluck-test.s3.ap-northeast-2.amazonaws.com/board/d9752923-a839-4823-bfc3-a92fc35d3245%EA%B9%80%EC%A7%80%EC%9B%901.jpg',
    );
  };

  const onLogin = () => {};
  return (
    <>
      <button
        aria-label="Increment value"
        onClick={() => dispatch(testActions.increment())}>
        Increment
      </button>
      <span>{count}</span>
      <button
        aria-label="Decrement value"
        onClick={() => dispatch(testActions.decrement())}>
        Decrement
      </button>
      <span></span>
      {post.posts.map((post, idx) => (
        <div key={idx}>{post.content}</div>
      ))}
      <button onClick={() => dispatch(postsActions.getPostAPI())}>
        요청하기
      </button>
      <Squre></Squre>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <MobileDatePicker
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <DateRangeIcon />
              </InputAdornment>
            ),
          }}
          label="날짜선택"
          value={value}
          onChange={(newValue) => {
            setValue(newValue);
          }}
          renderInput={(params) => <TextField {...params} />}
        />
      </LocalizationProvider>
      <DatePicker1
        dateFormat="yyyy-MM-dd"
        minDate={new Date()}
        maxDate={puls}
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        ref={date}
      />

      <DatePicker
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        showTimeSelect
        showTimeSelectOnly
        timeIntervals={15}
        timeCaption="Time"
        dateFormat="h:mm aa"
      />
      <button onClick={onBtn}>가져와</button>
      <button onClick={getLocation}>위치가져와</button>
      <button onClick={getImg}>사진가져와</button>
      <StyleImg src={img}></StyleImg>
      <a href="https://kauth.kakao.com/oauth/authorize?client_id=740a6ba6ace29c1a5211a4105bfd7353&redirect_uri=http://localhost:3000/auth/profil&response_type=code">
        로그인
      </a>
    </>
  );
}

const DatePicker1 = styled(DatePicker)`
  /* background-color: red; */
  .react-datepicker__input-container {
    background-color: red;
  }
`;
const StyleImg = styled.div`
  background-image: url('${(props) => (props.src ? props.src : '')}');
  height: 248px;
  background-color: gray;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`;
export default TestPage;
