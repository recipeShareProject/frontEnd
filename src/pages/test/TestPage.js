import React from 'react';
import styled from 'styled-components';

import {useSelector, useDispatch} from 'react-redux';

import {AdapterDayjs} from '@mui/x-date-pickers/AdapterDayjs';
import {LocalizationProvider} from '@mui/x-date-pickers/LocalizationProvider';
import {MobileDatePicker} from '@mui/x-date-pickers/MobileDatePicker';
import {InputAdornment} from '@mui/material';
import TextField from '@mui/material/TextField';
import DateRangeIcon from '@mui/icons-material/DateRange';

import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import dayjs from 'dayjs';
import axios from 'axios';

import ModalPopup from 'ui/molecules/ModalPopup';

const TestPage = () => {
  // const navigate = useNavigate();
  // const [params] = useSearchParams();
  // const navigate = useNavigate();
  // React.useEffect(() => {
  //   const token = params.get('token');
  //   if (token) {
  //     setCookie('token', token);
  //     navigate('/auth/profile');
  //   }
  // }, []);
  const post = useSelector((state) => state.post);
  const dispatch = useDispatch();
  const now = dayjs();
  const puls = now.add(5, 'day').$d;
  const start = now.add(1, 'day').$d;

  const [img, setImg] = React.useState();

  const [value, setValue] = React.useState(null);
  const [startDate, setStartDate] = React.useState(start);
  const [startTime, setStartTime] = React.useState(new Date());
  const [modal, setModal] = React.useState(false);
  const date = React.useRef();

  const onBtn = () => {
    console.log(date.current.input.value);
  };
  const {kakao} = window;
  const geocoder = new kakao.maps.services.Geocoder();

  const getImg = () => {
    setImg(
      'https://potluck-test.s3.ap-northeast-2.amazonaws.com/board/d9752923-a839-4823-bfc3-a92fc35d3245%EA%B9%80%EC%A7%80%EC%9B%901.jpg',
    );
  };
  const ClickAddress = () => {};
  const getData = () => {
    axios
      .get('http://3.35.106.187/api/board/1')

      .then(function (response) {
        // handle success
        console.log(response);
        console.log('로그인요청');
      })
      .catch(function (error) {
        // handle error
        console.log('로그인요청');
        console.log(error);
      });
  };
  const onLogin = () => {};
  const openModal = () => {
    setModal(true);
  };
  return (
    <>
      {post.posts.map((post, idx) => (
        <div key={idx}>{post.content}</div>
      ))}

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
      <button onClick={onBtn}>input가져와</button>
      <button onClick={ClickAddress}>위치가져와</button>
      <button onClick={getImg}>사진가져와</button>
      <StyleImg src={img}></StyleImg>
      <a href="http://3.35.106.187/oauth2/authorization/kakao?redirect_uri=http://localhost:3000/auth/profil">
        로그인
      </a>
      <button onClick={getData}>데이터가져오기</button>
      <button onClick={openModal}>모달팝업</button>
      {modal && (
        <ModalPopup
          isOn={true}
          content="레시피명에 대한 닉네임님의 평가가 궁금해요"
          closeEvent={setModal}
          yesEvent={() => console.log('yes')}></ModalPopup>
      )}
    </>
  );
};

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
