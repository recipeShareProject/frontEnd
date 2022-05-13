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

  const [value, setValue] = React.useState(null);
  const [startDate, setStartDate] = React.useState(start);
  const [startTime, setStartTime] = React.useState(new Date());
  const date = React.useRef();

  const onBtn = () => {
    console.log(date.current.input.value);
  };
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
    </>
  );
}

const DatePicker1 = styled(DatePicker)`
  /* background-color: red; */
  .react-datepicker__input-container {
    background-color: red;
  }
`;

export default TestPage;
