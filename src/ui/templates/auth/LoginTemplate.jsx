import React from 'react';

import KakaoIcon from 'assets/imgs/KakaoIcon.png';
import GoogleIcon from 'assets/imgs/GoogleIcon.png';
import LoginIcon from 'common/icons/LoginIcon';

import HeaderBar from 'ui/templates/header/HeaderBar';
import Wrapper from 'ui/atoms/Wrapper';
import Typography from 'ui/atoms/Typography';
import LoginButton from 'ui/atoms/LoginButton';
const Login = () => {
  return (
    <React.Fragment>
      <HeaderBar />
      <Wrapper
        height="calc(100vh - 72px)"
        display="flex"
        direction="column"
        justify="space-between"
        align="center"
        padding="72px 0 0 0 ">
        <Wrapper
          display="flex"
          direction="column"
          justify="center"
          align="center"
          padding="15vh 0 0 0">
          <Typography fontSize="20px" fontWeight="600" margin="0 0 16px 0 ">
            Potluck 시작하기
          </Typography>

          <Wrapper
            display="flex"
            direction="column"
            justify="center"
            align="center">
            <Typography fonstSize="14px" fontWeight="400">
              쉽고 재미있게 요리하고
            </Typography>
            <Typography fonstSize="14px" fontWeight="400">
              이웃들과 즐거움을 나눠보세요!
            </Typography>
          </Wrapper>
        </Wrapper>
        <Wrapper padding="5vh 0 0 0 ">
          <LoginButton
            background="#fee500"
            src={KakaoIcon}
            href={process.env.REACT_APP_KAKAO_LOGIN}
            margin="0 0 8px 0">
            카카오로 시작하기
          </LoginButton>

          <LoginButton
            background="white"
            border="1px solid #4285f4"
            src={GoogleIcon}
            href={process.env.REACT_APP_GOOGLE_LOGIN}
            margin="0 0 0 0">
            구글로 시작하기
          </LoginButton>
        </Wrapper>
        <LoginIcon />
      </Wrapper>
    </React.Fragment>
  );
};

export default Login;
