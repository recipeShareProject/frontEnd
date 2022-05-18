import React from 'react';
import styled from 'styled-components';
import {useNavigate} from 'react-router-dom';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import dayjs from 'dayjs';

import {useDispatch, useSelector} from 'react-redux';
import {tagActions} from 'redux/slice/tagSlice';
import {imgActions} from 'redux/slice/imgSlice';
import {postActions} from 'redux/slice/postSlice';

import AddImgSlider from 'components/common/AddImgSlider';
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import CloseIcon from '@mui/icons-material/Close';
import Tag from 'components/common/Tag';

function EditParty() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const now = dayjs();
  const puls = now.add(5, 'day').$d;
  const start = now.add(1, 'day').$d;

  const Img = useSelector((state) => state.img.completeImgs);
  const tags = useSelector((state) => state.tag.tags);
  const tag = React.useRef();
  const title = React.useRef();
  const content = React.useRef();
  const date = React.useRef();
  const time = React.useRef();

  const [startDate, setStartDate] = React.useState(start);
  // const [startTime, setStartTime] = React.useState(new Date());
  const [category, setcategory] = React.useState('나눔해요');

  React.useEffect(() => {
    return () => {
      dispatch(imgActions.setCompleteImg());
      dispatch(tagActions.setTag());
    };
  }, []);
  const handleChkChange = (e) => {
    setcategory(e.target.id);
  };

  const onTag = (e) => {
    //enter 키코드 = 0
    if (e.key === 'Enter' || e.type === 'click') {
      dispatch(tagActions.addTag(tag.current.value));
      tag.current.value = '';
    }
  };
  const onDel = (e) => {
    title.current.value = '';
  };

  const {kakao} = window;
  const geocoder = new kakao.maps.services.Geocoder();
  const getLocation = () => {
    if (navigator.geolocation) {
      // GPS를 지원하면
      navigator.geolocation.getCurrentPosition(
        (position) => {
          // position 객체 내부에 timestamp(현재 시간)와 coords 객체
          // const time = new Date(position.timestamp);
          // console.log(position);
          // console.log(`현재시간 : ${time}`);
          // console.log(`latitude 위도 : ${position.coords.latitude}`);
          // console.log(`longitude 경도 : ${position.coords.longitude}`);
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

  const callback = function (result, status) {
    if (status === kakao.maps.services.Status.OK) {
      const adress = result[0].address.address_name.split(' ');

      const data = {
        title: title.current.value,
        category: category,
        imagePath: Img,
        content: content.current.value,
        tag: tags,
        expiredAt: `${startDate}`,
        loaction: adress[2],
      };
      console.log(data);
      dispatch(postActions.setPost(data));
      navigate('/party');
    }
  };
  const onRegi = (e) => {
    getLocation();
  };

  return (
    <>
      <h1>게시글 등록하기</h1>
      <h4>제목</h4>
      <InputWrapper>
        <Input placeholder="제목을 입력해주세요" ref={title} />
        <CloseBtn onClick={onDel} />
      </InputWrapper>
      <FlexDiv>
        <div>
          <Radio
            onChange={handleChkChange}
            id="나눔해요"
            type="radio"
            name="share"
            value={category}></Radio>
          <Label check={category === '나눔해요'} htmlFor="나눔해요">
            나눔해요
          </Label>
        </div>
        <div>
          <Radio
            onChange={handleChkChange}
            id="나눔해줘요"
            type="radio"
            name="share"
            value={category}></Radio>
          <Label check={category === '나눔해줘요'} htmlFor="나눔해줘요">
            나눔해줘요
          </Label>
        </div>
      </FlexDiv>
      <h4>사진</h4>
      <AddImgSlider></AddImgSlider>
      <TextArea
        placeholder="게시글에 들어갈 내용을 입력해 주세요"
        ref={content}></TextArea>

      <InputWrapper>
        <Input placeholder="태그를 입력해주세요" onKeyPress={onTag} ref={tag} />
        <PlusBtn onClick={onTag} />
      </InputWrapper>
      <Tag type="input">태그영역</Tag>
      <h4>나눔 종료 일시</h4>
      <FlexDiv>
        <DatePicker1
          dateFormat="yyyy-MM-dd"
          minDate={new Date()}
          maxDate={puls}
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          ref={date}
        />

        <TimePicker1
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          showTimeSelect
          showTimeSelectOnly
          timeIntervals={15}
          timeCaption="시간"
          dateFormat="h:mm aa"
          ref={time}
        />
      </FlexDiv>
      <AddBtn onClick={onRegi}>등록하기</AddBtn>
    </>
  );
}

const FlexDiv = styled.div`
  display: flex;
  width: 100%;
  div:first-child {
    margin-right: 0.5rem;
  }
`;

const Radio = styled.input`
  display: none;
  margin-right: 1rem;
`;

const Label = styled.label`
  height: 48px;
  width: 44vw;
  display: inline-block;
  background-color: lightgray;
  display: flex;
  justify-content: center;
  align-items: center;
  ${(props) => (props.check ? 'background-color:  #5C5C5C; color:white;' : '')}
`;

const TextArea = styled.textarea`
  height: 110px;
  width: 100%;
  margin-top: 0.5rem;
  box-sizing: border-box;
  resize: none;
  padding: 1rem;
  margin-bottom: 0.5rem;
`;

const InputWrapper = styled.div`
  height: 48px;
  background-color: lightgray;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0 8px;
`;

const AddBtn = styled.div`
  height: 48px;
  background-color: lightgray;
  margin-top: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const Input = styled.input`
  width: 100%;
  border: none;
  background: none;
  line-height: 1.5rem;
`;

const PlusBtn = styled(AddRoundedIcon)`
  cursor: pointer;
`;

const CloseBtn = styled(CloseIcon)`
  cursor: pointer;
`;

const DatePicker1 = styled(DatePicker)`
  background-color: red;
  width: 50%;
`;

const TimePicker1 = styled(DatePicker)`
  width: 50%;
`;

export default EditParty;
