import React from 'react';
import {useNavigate} from 'react-router-dom';

import profileImg from 'assets/imgs/profile48.png';
import myInfo from 'assets/imgs/myInfo.png';
import pencil from 'assets/imgs/pencil_black.png';
import logout from 'assets/imgs/logout.png';

import TabletWrapper from 'tablet-ui/atoms/TabletWrapper';
import Header from 'tablet-ui/templates/header/TabletHeader';
import Wrapper from 'tablet-ui/atoms/Wrapper';
import HeadTitle from 'tablet-ui/atoms/HeadTitle';
import Profile from 'tablet-ui/organisms/Profile';
import Divider from 'tablet-ui/atoms/Divider';
import MyPageButton from 'tablet-ui/organisms/MyPageButton';
const MyTabletTemplate = () => {
  const navigate = useNavigate();
  return (
    <TabletWrapper>
      <Header />
      <Wrapper padding="88px 64px 0 64px">
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
        content="내 정보변경"
        _onClick={() => navigate('/my/myInfo')}
      />
      <MyPageButton
        src={pencil}
        alt="pencil"
        content="나의 글"
        _onClick={() => navigate('/my/myPost')}
      />

      <MyPageButton src={logout} alt="logout" content="로그아웃" />
    </TabletWrapper>
  );
};

export default MyTabletTemplate;
