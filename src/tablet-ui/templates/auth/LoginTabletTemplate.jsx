import React from 'react';

import KakaoIcon from 'assets/imgs/KakaoIcon.png';
import GoogleIcon from 'assets/imgs/GoogleIcon.png';
import LoginTabletIcon from 'common/icons/LoginTabletIcon';

import TabletWrapper from 'tablet-ui/atoms/TabletWrapper';
import Header from 'tablet-ui/templates/header/TabletHeader';
import Wrapper from 'tablet-ui/atoms/Wrapper';
import Typography from 'tablet-ui/atoms/Typography';

import LoginButton from 'tablet-ui/atoms/LoginButton';

const LoginTabletTemplate = () => {
  return (
    <TabletWrapper>
      <Header />
      {/* <Wrapper padding="88px 64px 0 64px">로그인</Wrapper> */}
      <Wrapper
        height="100vh"
        display="flex"
        direction="column"
        justify="end"
        align="center">
        <Wrapper
          display="flex"
          direction="column"
          justify="center"
          align="center"
          padding="381px 0 0 0">
          <Typography fontSize="20px" fontWeight="600" margin="0 0 24px 0 ">
            Potluck 시작하기
          </Typography>

          <Wrapper
            display="flex"
            direction="column"
            justify="center"
            align="center"
            margin="0 0 58px 0 ">
            <Typography fonstSize="14px" fontWeight="400">
              쉽고 재미있게 요리하고
            </Typography>
            <Typography fonstSize="14px" fontWeight="400">
              이웃들과 즐거움을 나눠보세요!
            </Typography>
          </Wrapper>
        </Wrapper>
        <Wrapper padding="0 0 144px 0 ">
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
        <LoginTabletIcon />
      </Wrapper>
    </TabletWrapper>
  );
};

export default LoginTabletTemplate;
