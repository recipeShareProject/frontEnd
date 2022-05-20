import React from 'react';
import styled from 'styled-components';
import {useNavigate} from 'react-router-dom';
import DatePicker from 'react-datepicker';

import dayjs from 'dayjs';

import {useDispatch, useSelector} from 'react-redux';
import {tagActions} from 'redux/slice/tagSlice';
import {imgActions} from 'redux/slice/imgSlice';
import {postActions} from 'redux/slice/postSlice';

import AddImgSlider from 'components/common/AddImgSlider';
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import CloseIcon from '@mui/icons-material/Close';
import Tag from 'components/common/Tag';
import Box from '@mui/material/Box';
import {Black5, Black20, Colar100} from 'assets/colorSet';

import CostomDatePicker from 'components/party/CostomDatePicker';
function EditParty() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const now = dayjs();
  const maxDay = now.add(5, 'day').$d;
  const startDay = now.add(1, 'day').$d;

  const Img = useSelector((state) => state.img.completeImgs);
  const tags = useSelector((state) => state.tag.tags);
  const tag = React.useRef();
  const title = React.useRef();
  const content = React.useRef();
  const date = React.useRef();
  const time = React.useRef();

  const [startDate, setStartDate] = React.useState(startDay);
  const [category, setcategory] = React.useState('나눔해요');

  React.useEffect(() => {
    return () => {
      dispatch(imgActions.setCompleteImg());
      dispatch(tagActions.setTag());
    };
  }, [dispatch]);
  const handleChkChange = (e) => {
    setcategory(e.target.id);
  };

  const handleTag = (e) => {
    //enter 키코드 = 0
    if (e.key === 'Enter' || e.type === 'click') {
      dispatch(tagActions.addTag(tag.current.value));
      tag.current.value = '';
    }
  };

  const {kakao} = window;
  const geocoder = new kakao.maps.services.Geocoder();
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
      <Title fontSize="20px">게시글 등록하기</Title>
      <Title fontSize="16px" margin="24px 0 16px 0">
        제목
      </Title>
      <Box>
        <InputWrapper>
          <Input placeholder="제목을 입력해주세요"></Input>
        </InputWrapper>
      </Box>
      <Title fontSize="16px" margin="24px 0 16px 0">
        말머리
      </Title>
      <StyleFlex>
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
      </StyleFlex>
      <Title fontSize="16px" margin="24px 0 16px 0">
        내용
      </Title>
      <Box sx={{margin: '0 0 16px 0'}}>
        <InputWrapper>
          <Input placeholder="설명을 입력해 주세요"></Input>
        </InputWrapper>
      </Box>
      <AddImgSlider />
      <Title fontSize="16px" margin="24px 0 16px 0">
        태그
      </Title>
      <InputWrapper>
        <Input
          placeholder="태그를 입력해주세요"
          onKeyPress={handleTag}
          ref={tag}
        />
        <PlusBtn onClick={handleTag} />
      </InputWrapper>

      <Tag type="input">태그영역</Tag>
      <Title fontSize="16px" margin="24px 0 16px 0">
        나눔 종료 일시
      </Title>

      <StyleFlex>
        <PickerWrapper>
          <CostomDatePicker _ref={date} />
        </PickerWrapper>
        <PickerWrapper>
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
        </PickerWrapper>
      </StyleFlex>
      <AddBtn onClick={onRegi}>등록하기</AddBtn>
    </>
  );
}

const Title = styled.div`
  font-weight: bold;
  font-size: ${(props) => props.fontSize};
  margin: ${(props) => props.margin};
`;

const StyleFlex = styled.div`
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
  background-color: ${Black5};
  color: ${Black20};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  ${(props) =>
    props.check
      ? `border: 1px solid ${Colar100}; border-color:${Colar100}; background-color:  #FFFFFF; color:${Colar100};`
      : ''}
`;

const InputWrapper = styled.div`
  width: 100%;
  height: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0px 10px;
  box-sizing: border-box;
  border-bottom: 1px solid ${Black20};
`;

const Input = styled.input`
  width: 100%;
  border: none;
  background: none;
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

const PlusBtn = styled(AddRoundedIcon)`
  cursor: pointer;
`;

const PickerWrapper = styled.div`
  width: 160px;
  height: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0px 10px;
  box-sizing: border-box;
  border-bottom: 1px solid ${Black20};
`;

const TimePicker1 = styled(DatePicker)`
  width: 160px;
  text-align: center;
  border: none;
  outline: none;
`;

export default EditParty;
