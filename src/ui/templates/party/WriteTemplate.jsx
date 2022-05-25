import React from 'react';
import {useNavigate} from 'react-router-dom';
import dayjs from 'dayjs';

import {useDispatch, useSelector} from 'react-redux';
import {tagActions} from 'redux/slices/tagSlice';
import {imgActions} from 'redux/slices/imgSlice';
import {postActions} from 'redux/slices/postSlice';

import AddImgSlider from 'ui/organisms/AddImgSlider';
import FilterInputTag from 'ui/organisms/FilterInputTag';
import CustomTimePicker from 'ui/atoms/CustomTimePicker';
import CustomDatePicker from 'ui/atoms/CustomDatePicker';
import Wrapper from 'ui/atoms/Wrapper';
import HeaderBar from 'ui/templates/header/HeaderBar';
import Typography from 'ui/atoms/Typography';
import Input from 'ui/atoms/Input';
import Radio from 'ui/organisms/PartyRadio';
import Divider from 'ui/atoms/Divider';
import PlusIconInput from 'ui/organisms/PlusIconInput';
import PrimaryButton from 'ui/atoms/PrimaryButton';

import {Colar100} from 'assets/colorSet';
const EditParty = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const Img = useSelector((state) => state.img.completeImgs);
  const tags = useSelector((state) => state.tag.tags);
  const tag = React.useRef();
  const title = React.useRef();
  const content = React.useRef();

  const now = dayjs();
  const startDay = now.add(1, 'day').$d;
  const [changeDate, setChangeDate] = React.useState(startDay);
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
        expiredAt: `${changeDate}`,
        location: adress[2],
      };
      dispatch(postActions.setPost(data));
      navigate('/party');
    }
  };
  const onRegi = (e) => {
    getLocation();
  };

  const deleteTag = (idx) => {
    dispatch(tagActions.delTag(idx));
  };
  return (
    <React.Fragment>
      <HeaderBar type="writeParty" />
      <Wrapper padding="72px 0 60px 0">
        <Wrapper padding="0 1rem 0 1rem">
          <Typography fontSize="20px" fontWeight="600" margin="16px 0 0 0">
            게시글 등록하기
          </Typography>
          <Typography fontSize="16px" fontWeight="600" margin="24px 0 0 0">
            제목
          </Typography>

          <Input _ref={title} placeholder="제목을 입력해주세요"></Input>

          <Typography fontSize="16px" fontWeight="600" margin="24px 0 0 0">
            말머리
          </Typography>

          <Radio category={category} handleChkChange={handleChkChange} />
        </Wrapper>

        <Divider />
        <Wrapper padding="0 1rem 0 1rem">
          <Typography fontSize="16px" margin="24px 0 16px 0" fontWeight="600">
            내용
          </Typography>
          <Wrapper margin="0 0 16px 0">
            <Input _ref={content} placeholder="설명을 입력해 주세요"></Input>
          </Wrapper>
          <AddImgSlider />
          <Typography fontSize="16px" margin="24px 0 16px 0" fontWeight="600">
            태그
          </Typography>

          <PlusIconInput
            placeholder="태그를 입력해주세요"
            handleTag={handleTag}
            _ref={tag}
          />
          <Wrapper margin="1.2rem 0" display="flex" flexWrap="wrap" gap="10px">
            {tags.map((tag, idx) => (
              <FilterInputTag _onClick={() => deleteTag(idx)} type="input">
                {tag}
              </FilterInputTag>
            ))}
          </Wrapper>
        </Wrapper>

        <Divider />
        <Wrapper padding="0 1rem 2rem 1rem ">
          <Typography fontSize="16px" margin="24px 0 16px 0" fontWeight="600">
            나눔 종료 일시
          </Typography>

          <Wrapper display="flex">
            <CustomDatePicker _onChange={setChangeDate} />

            <CustomTimePicker _onChange={setChangeDate} />
          </Wrapper>
        </Wrapper>
      </Wrapper>
      <PrimaryButton
        fixed="true"
        background={Colar100}
        color="white"
        onClick={onRegi}>
        등록하기
      </PrimaryButton>
    </React.Fragment>
  );
};

export default EditParty;
