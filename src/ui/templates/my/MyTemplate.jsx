import React from 'react';
import {useNavigate} from 'react-router-dom';
import profile from 'assets/imgs/profile48.png';
// import {Box} from '@mui/material';
import {Black40} from 'assets/colorSet';

import HeaderBar from 'ui/templates/header/HeaderBar';
import Wrapper from 'ui/atoms/Wrapper';
import Typography from 'ui/atoms/Typography';
import Divider from 'ui/atoms/Divider';
import Image from 'ui/atoms/Image';
import Box from 'ui/atoms/Box';
import MyPageButton from 'ui/organisms/MyPageButton';

import myInfo from 'assets/imgs/myInfo.png';
import pencil from 'assets/imgs/pencil_black.png';
import logout from 'assets/imgs/logout.png';
const MyTemplate = () => {
  const navigate = useNavigate();
  return (
    <React.Fragment>
      <HeaderBar type="my" />
      <Wrapper padding="72px 0 0 0">
        <Wrapper padding="0 1rem">
          <Typography margin="16px 0 0 0" fontSize="20px" fontWeight="600">
            마이페이지
          </Typography>
          <Wrapper display="flex" align="center" margin="24px 0 24px 0">
            <Image height="48px" width="48px" src={profile} alt="profile" />
            <Wrapper margin="0 0 0 16px">
              <Typography>닉네임</Typography>
              <Typography fontSize="12px" color={Black40}>
                potluck@kakao.com
              </Typography>
            </Wrapper>
          </Wrapper>
        </Wrapper>
        <Divider />
        <Box>
          <MyPageButton
            src={myInfo}
            alt="myInfo"
            content="나의 정보"
            _onClick={() => navigate('/my/myInfo')}
          />
          <MyPageButton
            src={pencil}
            alt="pencil"
            content="나의 글"
            _onClick={() => navigate('/my/myPost')}
          />

          <MyPageButton src={logout} alt="logout" content="로그아웃" />
        </Box>
      </Wrapper>
    </React.Fragment>
  );
};

export default MyTemplate;
