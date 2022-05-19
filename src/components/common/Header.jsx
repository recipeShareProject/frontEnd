import React from 'react';
import styled from 'styled-components';
import {useNavigate, useLocation} from 'react-router-dom';

import Foobar from 'components/common/FooBar';
import LogoIcon from 'common/icons/LogoIcon';
import AlarmIcon from 'common/icons/AlarmIcon';
import ProfileIcon from 'common/icons/ProfileIcon';

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const postId = location.pathname.split('/')[3];

  const moveToMain = () => {
    navigate('/');
  };
  const moveToNoti = () => {
    navigate('/noti');
  };
  const moveToMypage = () => {
    navigate('/my');
  };
  const onClickLogin = () => {
    navigate('/auth/login');
  };

  switch (location.pathname) {
    case location.pathname.includes(`/my`) ? location.pathname : '':
    case '/search/filter':
    case '/recipe/write':
    case '/party/addParty':
      return <Foobar type="back" />;

    // case `/recipe/detail/${postId}`:
    case location.pathname.includes(`/recipe/detail`) ? location.pathname : '':
      return <Foobar type="recipe" />;

    case `/party/detailParty/${postId}`:
      return <Foobar type="party" />;

    default:
      return (
        <StyleHeader>
          <LogoIcon onClick={moveToMain}></LogoIcon>
          <StyleDiv>
            <StyleAlert onClick={moveToNoti}>
              <AlarmIcon />
            </StyleAlert>
            <ProfileIcon onClick={moveToMypage}></ProfileIcon>
          </StyleDiv>
          {/* <StyleBtn onClick={onClickLogin}>로그인</StyleBtn> */}
        </StyleHeader>
      );
  }
};

const StyleHeader = styled.div`
  height: 40px;
  padding: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyleDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;
const StyleAlert = styled.div`
  margin-right: 0.75rem;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const StyleAvata = styled.div`
  border-radius: 50%;
  justify-content: center;
  align-items: center;
  display: fl;
`;

export default Header;
