import React from 'react';
import {useNavigate} from 'react-router-dom';
import profileImg from 'assets/imgs/profile48.png';
import {useSelector, useDispatch} from 'react-redux';

import HeaderBar from 'ui/templates/header/HeaderBar';
import Wrapper from 'ui/atoms/Wrapper';
import Divider from 'ui/atoms/Divider';

import MyPageButton from 'ui/organisms/MyPageButton';
import HeadTitle from 'ui/atoms/HeadTitle';
import Profile from 'ui/organisms/Profile';

import myInfo from 'assets/imgs/myInfo.png';
import pencil from 'assets/imgs/pencil_black.png';
import logoutLogo from 'assets/imgs/logout.png';

import {deleteCookie} from 'common/presenters/Cookie';
import {logout} from 'redux/slices/userSlice';
const MyTemplate = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);
  const handleLogout = () => {
    dispatch(logout());
    deleteCookie('token');
    navigate('/');
  };
  return (
    <React.Fragment>
      <HeaderBar type="my" />
      <Wrapper padding="72px 0 0 0">
        <Wrapper padding="0 1rem">
          <HeadTitle title="마이페이지"></HeadTitle>

          <Profile
            size="48px"
            src={user.imageUrl ? user.imageUrl : profileImg}
            nickName={user.name}
            email={user.email}
            margin="24px 0 24px 0"
          />
        </Wrapper>
        <Divider />

        <MyPageButton
          src={myInfo}
          alt="myInfo"
          content="내 정보 변경"
          _onClick={() => navigate('/my/myInfo')}
        />
        <MyPageButton
          src={pencil}
          alt="pencil"
          content="나의 글"
          _onClick={() => navigate('/my/myPost')}
        />

        <MyPageButton
          src={logoutLogo}
          alt="logout"
          content="로그아웃"
          _onClick={() => {
            handleLogout();
          }}
        />
      </Wrapper>
    </React.Fragment>
  );
};

export default MyTemplate;
