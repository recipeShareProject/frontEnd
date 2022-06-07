import React, {useCallback} from 'react';
import styled from 'styled-components';
import {debounce} from 'lodash';
import {useNavigate} from 'react-router-dom';

import PrimaryButton from 'ui/atoms/PrimaryButton';
import {Black40, Colar100} from 'assets/colorSet';
import ProfileIcon from 'assets/imgs/profile120.png';
import Typography from 'ui/atoms/Typography';
import Image from 'ui/atoms/Image';
import Wrapper from 'ui/atoms/Wrapper';
import Input from 'ui/atoms/Input';
import HeadTitle from 'ui/atoms/HeadTitle';
import EditFrom from 'ui/organisms/EditForm';

import {useSelector, useDispatch} from 'react-redux';
import userApi from 'api/userApi';

import {userActions} from 'redux/slices/userSlice';

const ProfileTemplate = ({title, btnText}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // const fileInput = React.useRef('');
  // const [Img, setImg] = React.useState(ProfileIcon);
  // const [sendImg, setsendImg] = React.useState('');

  const [duplication, setDuplication] = React.useState(false);
  const user = useSelector((state) => state.user.user);
  const [nickname, setNickname] = React.useState(user.name);

  console.log(user.name);

  const sendApi = async (sendData) => {
    //todo:서버개발
    // const res = await userApi.patchMyInfoAxios(sendData);
    // console.log(res);
    // if (res.status === 208) {
    //   setDuplication(true);
    // } else if (res.status === 200) {
    //   setDuplication(false);
    // }
  };

  const delayedSearch = useCallback(
    debounce((v) => sendApi(v), 600),
    [],
  );
  const handleChange = (e) => {
    setNickname(e.target.value);
    delayedSearch(e.target.value);
  };

  const handleRegister = async () => {
    if (duplication === false) {
      const res = await userApi.patchMyInfoAxios(nickname);

      if (res.status === 208) {
        setDuplication(true);
      } else if (res.status === 200) {
        const sendData = res.data.name;
        dispatch(userActions.changeName(sendData));

        navigate(-1);
      }
    }
  };
  //todo:서버개발
  // //파일선택
  // const selectFile = (e) => {
  //   const {
  //     target: {files},
  //   } = e;

  //   const imageFile = files[0];
  //   const reader = new FileReader();
  //   setsendImg(imageFile);
  //   reader.readAsDataURL(imageFile);

  //   reader.onloadend = (e) => {
  //     const {
  //       currentTarget: {result},
  //     } = e;
  //     setImg(result);
  //   };
  // };

  return (
    <React.Fragment>
      <Wrapper
        boxSizing="border-box"
        height="calc(100vh - 60px)"
        padding="1rem">
        <HeadTitle mt="84px" title={title} />

        <Wrapper
          margin="40px 0 0 0 "
          display="flex"
          direction="column"
          justify="center"
          align="center">
          {/* todo:서버개발 */}
          {/* <Upload id="1" type="file" onChange={selectFile} ref={fileInput} />

          <label htmlFor="1">
            <Image src={Img} width="120px" height="120px" radius="50%" />

            <Typography
              margin="16px 0 0 0 "
              fontSize="12px"
              fontWeight="500"
              align="center"
              color={Black40}>
              사진 업로드하기
            </Typography>
          </label> */}
        </Wrapper>

        <EditFrom mt={'2.25rem'} title="닉네임">
          <Input
            value={nickname}
            _onChange={handleChange}
            placeholder="2자에서 8자까지 입력해 주세요"
          />
          {duplication && (
            <Typography margin="8px 0 0 0" fontSize="12px" color={Colar100}>
              이미 사용 중인 닉네임이에요
            </Typography>
          )}
        </EditFrom>
      </Wrapper>
      <PrimaryButton
        _onClick={handleRegister}
        background={Colar100}
        color="white">
        {btnText}
      </PrimaryButton>
    </React.Fragment>
  );
};

// const Upload = styled.input`
//   display: none;
// `;

export default ProfileTemplate;
