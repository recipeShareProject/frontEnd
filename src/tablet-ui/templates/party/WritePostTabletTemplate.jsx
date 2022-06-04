import React from 'react';
import {useNavigate} from 'react-router-dom';
import dayjs from 'dayjs';

import {useDispatch, useSelector} from 'react-redux';
import {tagActions} from 'redux/slices/tagSlice';
import {imgActions} from 'redux/slices/imgSlice';

import {Colar100} from 'assets/colorSet';

import TabletWrapper from 'tablet-ui/atoms/TabletWrapper';
import TabletHeaderBar from 'tablet-ui/templates/header/TabletHeaderBar';
import Wrapper from 'tablet-ui/atoms/Wrapper';
import HeadTitle from 'tablet-ui/atoms/HeadTitle';
import Input from 'tablet-ui/atoms/Input';
import EditForm from 'tablet-ui/organisms/EditForm';
import PartyRadio from 'tablet-ui/organisms/party/PartyRadio';
import Divider from 'tablet-ui/atoms/Divider';
import AddImgSlider from 'tablet-ui/organisms/AddImgSlider';
import PlusIconInput from 'tablet-ui/organisms/PlusIconInput';
import FilterInputTag from 'tablet-ui/organisms/FilterInputTag';
import CustomTimePicker from 'tablet-ui/atoms/CustomTimePicker';
import CustomDatePicker from 'tablet-ui/atoms/CustomDatePicker';
import PrimaryButton from 'tablet-ui/atoms/PrimaryButton';
const WritePostTabletTemplate = ({type}) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const sendImgs = useSelector((state) => state.img.sendCompleteImgs);
  const tags = useSelector((state) => state.tag.tags);
  const tag = React.useRef();
  const title = React.useRef();
  const content = React.useRef();

  const now = dayjs();
  const startDay = now.add(1, 'day').$d;
  const [changeDate, setChangeDate] = React.useState(startDay);
  const [category, setcategory] = React.useState('나눔해요');
  const post = useSelector((state) => state.post.post);
  const postId = post.postId;

  React.useEffect(() => {
    if (type === 'modi') {
      // dispatch(tagActions.setTags(post.tag));

      post.images.map((v, idx) => {
        dispatch(imgActions.setImgs({idx, v}));
      });

      setcategory('나눔해요'); //post.category
      setChangeDate(post.expiredAt);
      title.current.value = post.title;
      content.current.value = post.content;
    }
  }, []);

  React.useEffect(() => {
    return () => {
      dispatch(imgActions.setSendCompleteImg());
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
        // 2022-01-20T13:23:34
        const months = [
          '01',
          '02',
          '03',
          '04',
          '05',
          '06',
          '07',
          '08',
          '09',
          '10',
          '11',
          '12',
        ];

        const month = months[changeDate.getMonth()];
        const expiredAt = `${changeDate.getFullYear()}-${month}-${changeDate.getDate()}T${changeDate.getHours()}:${changeDate.getMinutes()}:${changeDate.getSeconds()}`;

        const data = {
          title: title.current.value,
          category: category,
          images: sendImgs,
          content: content.current.value,
          tags: tags,
          //Todo: 서버개발중
          // expiredAt: expiredAt,
          address: adress,
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        };

        if (type === 'modi') {
          //   // const res = await postApi.patchPostAxios(postId, data);
          //   console.log('modi');
          //   if (res) {
          //     navigate('/party');
          //   }
          // } else {
          //   const res = await postApi.writePostAxios(data);
          //   console.log(res);
          //   if (res) {
          //     navigate('/party');
          //   }
        }
      });
    }
  };

  const onSave = function (e) {
    getAddress();
  };

  const deleteTag = (idx) => {
    dispatch(tagActions.delTag(idx));
  };

  return (
    <TabletWrapper>
      <TabletHeaderBar type="writeParty" />
      <Wrapper padding="84px 64px 0 64px">
        <HeadTitle
          title={type === 'modi' ? '게시글 수정하기' : '게시글 등록하기'}
        />
        <EditForm mt="26px" title="제목">
          <Input w="328px" _ref={title} placeholder="제목을 입력해주세요" />
        </EditForm>
        <EditForm title="카테고리">
          {type === 'modi' ? (
            <PartyRadio disabled={true} category={category} />
          ) : (
            <PartyRadio category={category} handleChkChange={handleChkChange} />
          )}
        </EditForm>
      </Wrapper>
      <Divider />
      <Wrapper padding="0 64px 0 64px">
        <EditForm title="내용">
          <Wrapper margin="0 0 16px 0">
            <Input _ref={content} placeholder="설명을 입력해 주세요" />
          </Wrapper>
        </EditForm>
      </Wrapper>
      <Wrapper padding="0 0 0 64px">
        <AddImgSlider />
      </Wrapper>
      <Wrapper padding="0 64px 0 64px">
        <EditForm title="태그">
          <PlusIconInput
            placeholder="태그를 입력해주세요"
            handleTag={handleTag}
            _ref={tag}
          />
          <Wrapper margin="1.2rem 0" display="flex" flexWrap="wrap" gap="10px">
            {tags &&
              tags.map((tag, idx) => (
                <FilterInputTag
                  key={idx}
                  _onClick={() => deleteTag(idx)}
                  type="input">
                  {tag}
                </FilterInputTag>
              ))}
          </Wrapper>
        </EditForm>
      </Wrapper>
      <Divider />
      <Wrapper padding="0 64px 92px 64px ">
        <EditForm title="나눔 종료 일시">
          <Wrapper display="flex">
            <CustomDatePicker _onChange={setChangeDate} />

            <CustomTimePicker _onChange={setChangeDate} />
          </Wrapper>
        </EditForm>
      </Wrapper>
      <PrimaryButton
        fixed="true"
        background={Colar100}
        color="white"
        _onClick={onSave}>
        {type === 'modi' ? '수정하기' : '등록하기'}
      </PrimaryButton>
    </TabletWrapper>
  );
};

export default WritePostTabletTemplate;
