import React, {useEffect} from 'react';
import styled from 'styled-components';
import ClearRoundedIcon from '@mui/icons-material/ClearRounded';
import {useParams, useLocation} from 'react-router-dom';
import QueryString from 'qs';
import axios from 'axios';
import PrimaryButton from 'ui/atoms/PrimaryButton';

import {Black40, Colar100} from 'assets/colorSet';
import ProfileIcon from 'assets/imgs/profile120.png';
import Typography from 'ui/atoms/Typography';
import Image from 'ui/atoms/Image';
import Wrapper from 'ui/atoms/Wrapper';
import Input from 'ui/atoms/Input';
const ProfileTemplate = (props) => {
  const location = useLocation();
  const queryData = QueryString.parse(location.search, {
    ignoreQueryPrefix: true,
  });
  const fileInput = React.useRef('');
  const [Img, setImg] = React.useState(ProfileIcon);

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
          프로필 설정하기
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
          <StyleLabel htmlFor="1">
            <Typography
              margin="16px 0 0 0 "
              fontSize="12px"
              fontWeight="500"
              color={Black40}>
              사진 업로드하기
            </Typography>
          </StyleLabel>
        </Wrapper>

        <Typography margin="2.25rem 0 0 0" fontSize="16px" fontWeight="600">
          닉네임
        </Typography>
        <Input placeholder="2자에서 8자까지 입력해 주세요" />

        <Typography margin="8px 0 0 0" fontSize="12px" color={Colar100}>
          이미 사용 중인 닉네임이에요
        </Typography>
      </Wrapper>
      <PrimaryButton background={Colar100} color="white">
        가입하기
      </PrimaryButton>
    </React.Fragment>
  );
};

const Avata = styled.div`
  border-radius: 50%;
  background-color: lightgray;
  background-image: url('${(props) => props.src}');
  width: 120px;
  height: 120px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;

const Flex = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  margin: 2.25rem 0;
`;

const StyleP = styled.p`
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
`;

const StyleBtn = styled.div`
  height: 60px;
  background-color: lightgray;

  display: flex;
  justify-content: center;
  align-items: center;

  p {
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    letter-spacing: 1.25px;
  }
`;

const InputWrapper = styled.div`
  height: 48px;
  position: relative;
  svg {
    position: absolute;
    bottom: 19px;
    right: 19px;
    width: 9px;
    height: 9px;
  }
`;

const StyleInput = styled.input`
  height: 32px;
  width: 95%;
  background-color: lightgray;
  padding: 0.5rem;
  border: none;
  outline: none;
`;

const Upload = styled.input`
  display: none;
`;

const StyleLabel = styled.label`
  cursor: pointer;
`;

export default ProfileTemplate;
