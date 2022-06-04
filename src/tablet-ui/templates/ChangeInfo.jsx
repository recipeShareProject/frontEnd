import React, {useCallback} from 'react';
import styled from 'styled-components';
import {debounce} from 'lodash';

import PrimaryButton from 'tablet-ui/atoms/PrimaryButton';
import {Black40, Colar100} from 'assets/colorSet';
import ProfileIcon from 'assets/imgs/profile120.png';
import Typography from 'tablet-ui/atoms/Typography';
import Image from 'tablet-ui/atoms/Image';
import Wrapper from 'tablet-ui/atoms/Wrapper';
import Input from 'tablet-ui/atoms/Input';
import HeadTitle from 'tablet-ui/atoms/HeadTitle';
import EditFrom from 'tablet-ui/organisms/EditForm';

import userApi from 'api/userApi';
const ProfileTemplate = ({title, btnText}) => {
  const fileInput = React.useRef('');
  const [Img, setImg] = React.useState(ProfileIcon);
  const [sendImg, setsendImg] = React.useState('');
  const [nickname, setNickname] = React.useState('');
  const [duplication, setDuplication] = React.useState(false);

  const sendApi = async (sendData) => {
    //Todo: 닉네임 중복 체크 api테스트 필요
    const res = await userApi.checkNicknameAxios(sendData);
    console.log(sendData);
    setDuplication(sendData);
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
    //toto:api 테스트
    const data = {
      profileImage: sendImg,
      nickname: nickname,
    };
    const res = await userApi.signupAxios(data);
  };
  //파일선택
  const selectFile = (e) => {
    const {
      target: {files},
    } = e;

    const imageFile = files[0];
    const reader = new FileReader();
    setsendImg(imageFile);
    reader.readAsDataURL(imageFile);

    reader.onloadend = (e) => {
      const {
        currentTarget: {result},
      } = e;
      setImg(result);
    };
  };

  return (
    <React.Fragment>
      <Wrapper
        boxSizing="border-box"
        height="calc(100vh - 61px)"
        padding="72px 64px 60px 64px ">
        <HeadTitle mt="88px" title={title} />

        <Wrapper
          margin="36px 0 0 0 "
          display="flex"
          direction="column"
          justify="center"
          align="center">
          <Upload id="1" type="file" onChange={selectFile} ref={fileInput} />

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
          </label>
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

const Upload = styled.input`
  display: none;
`;

export default ProfileTemplate;
