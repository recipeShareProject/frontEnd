import React, {useCallback} from 'react';
import styled from 'styled-components';
import {debounce} from 'lodash';

import PrimaryButton from 'ui/atoms/PrimaryButton';
import {Black40, Colar100} from 'assets/colorSet';
import ProfileIcon from 'assets/imgs/profile120.png';
import Typography from 'ui/atoms/Typography';
import Image from 'ui/atoms/Image';
import Wrapper from 'ui/atoms/Wrapper';
import Input from 'ui/atoms/Input';

import {getCookie} from 'common/presenters/Cookie';
import userApi from 'api/userApi';
const ProfileTemplate = ({title, btnText}) => {
  const fileInput = React.useRef('');
  const [Img, setImg] = React.useState(ProfileIcon);
  const [nickname, setNickname] = React.useState('');
  const [duplication, setDuplication] = React.useState(false);

  const sendApi = async (sendData) => {
    //Todo: 닉네임 중복 체크 api
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
  //파일선택
  const selectFile = (e) => {
    const {
      target: {files},
    } = e;

    const imageFile = files[0];
    const reader = new FileReader();

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
        height="calc(100vh - 60px)"
        padding="1rem">
        <Typography margin="84px 0 0 0" fontSize="20px" fontWeight="600">
          {title}
        </Typography>

        <Wrapper
          margin="40px 0 0 0 "
          display="flex"
          direction="column"
          justify="center"
          align="center">
          <Upload
            id="1"
            type="file"
            onChange={selectFile}
            ref={fileInput}></Upload>

          <Image src={Img} width="120px" height="120px" radius="50%" />
          <label htmlFor="1">
            <Typography
              margin="16px 0 0 0 "
              fontSize="12px"
              fontWeight="500"
              color={Black40}>
              사진 업로드하기
            </Typography>
          </label>
        </Wrapper>

        <Typography margin="2.25rem 0 0 0" fontSize="16px" fontWeight="600">
          닉네임
        </Typography>
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
      </Wrapper>
      <PrimaryButton
        _onClick={() => getCookie('token')}
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
