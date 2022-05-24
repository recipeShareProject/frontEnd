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
      <HeaderBar type="back" />
      <Wrapper
        display="flex"
        direction="column"
        justify="center"
        align="center">
        <Wrapper padding="7.8125rem 5.8125rem 0 5.8125rem ">
          <Typography fontSize="20px" fontWeight="600" margin="0 0 16px 0 ">
            Potluck 시작하기
          </Typography>
        </Wrapper>
        <Typography fonstSize="14px" fontWeight="400">
          쉽고 재미있게 요리하고
        </Typography>
        <Typography fonstSize="14px" fontWeight="400">
          이웃들과 즐거움을 나눠보세요!
        </Typography>

        <Wrapper padding="3.625rem 4rem">
          <LoginButton
            background="#fee500"
            src={KakaoIcon}
            href="http://justpotluck.shop/oauth2/authorization/kakao?redirect_uri=http://localhost:3000/auth/profil"
            margin="0 0 8px 0">
            카카오로 시작하기
          </LoginButton>

          <LoginButton
            background="white"
            border="1px solid #4285f4"
            src={GoogleIcon}
            href="http://www.justpotluck.shop/oauth2/authorization/google?redirect_uri=http://localhost:3000/auth/profil"
            margin="0 0 11.9rem 0">
            구글로 시작하기
          </LoginButton>
        </Wrapper>
        <LoginIcon />
      </Wrapper>
    </React.Fragment>
  );
};

export default Login;
