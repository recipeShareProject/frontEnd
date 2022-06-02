import React from 'react';
import {useNavigate} from 'react-router-dom';
import profileImg from 'assets/imgs/profile48.png';
// import {Box} from '@mui/material';
import {Black40} from 'assets/colorSet';

import HeaderBar from 'ui/templates/header/HeaderBar';
import Wrapper from 'ui/atoms/Wrapper';
import Divider from 'ui/atoms/Divider';

import MyPageButton from 'ui/organisms/MyPageButton';
import HeadTitle from 'ui/atoms/HeadTitle';
import Profile from 'ui/organisms/Profile';

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
          <HeadTitle title="마이페이지"></HeadTitle>

          <Profile
            size="48px"
            src={profileImg}
            nickName="닉네임"
            email="email@example.com"
            margin="24px 0 24px 0"
          />
        </Wrapper>
        <Divider />

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
      </Wrapper>
    </React.Fragment>
  );
};

export default MyTemplate;
