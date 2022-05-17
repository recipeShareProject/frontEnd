import React, {useEffect} from 'react';
import styled from 'styled-components';
import ClearRoundedIcon from '@mui/icons-material/ClearRounded';
import {useParams, useLocation} from 'react-router-dom';
import QueryString from 'qs';
import axios from 'axios';

const Profil = (props) => {
  const location = useLocation();
  const queryData = QueryString.parse(location.search, {
    ignoreQueryPrefix: true,
  });
  const fileInput = React.useRef('');
  const [Img, setImg] = React.useState('');
  const axiosApi = () => {
    axios({
      method: 'post',
      url: 'https://3.35.106.187/oauth2/authorization/kakao',
      data: {
        username: queryData.code,
        provider: 'kakao',
      },
    })
      .then((response) => {})
      .catch((error) => {});
    // console.log(queryData.code);
    // axios
    //   // https://3.35.106.187/oauth2/authorization/kakao
    //   //https://13.125.207.199/login
    //   .post('https://3.35.106.187/oauth2/authorization/kakao', {
    //     code: queryData.code,
    //     provider: 'kakao',
    //   })

    //   .then(function (response) {
    //     // handle success
    //     console.log(response);
    //     console.log('로그인요청');
    //   })
    //   .catch(function (error) {
    //     // handle error
    //     console.log('로그인요청');
    //     console.log(error);
    //   });
  };
  const onToken = () => {
    axiosApi();
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
    <>
      <h3>프로필 설정하기</h3>
      <Flex>
        <div>
          <Avata src={Img} />
          <Upload
            id="1"
            type="file"
            onChange={selectFile}
            ref={fileInput}></Upload>
          <StyleLabel htmlFor="1">
            <p>사진 업로드하기</p>
          </StyleLabel>
        </div>
      </Flex>
      <h4>닉네임</h4>
      <InputWrapper>
        <StyleInput placeholder="2자에서 8자까지 입력해 주세요"></StyleInput>
        <ClearRoundedIcon />
      </InputWrapper>

      <StyleP>이미 사용 중인 닉네임이에요</StyleP>
      <StyleBtn>
        <p>가입하기</p>
      </StyleBtn>
      <div>hi</div>
      <StyleBtn onClick={onToken}>
        <p>토큰받아오기</p>
      </StyleBtn>
    </>
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

export default Profil;
