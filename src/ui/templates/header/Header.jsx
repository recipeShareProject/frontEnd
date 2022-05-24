import React from 'react';
import {useNavigate} from 'react-router-dom';

import LogoIcon from 'common/icons/LogoIcon';
import AlarmIcon from 'common/icons/AlarmIcon';
import ProfileIcon from 'common/icons/ProfileIcon';

import Wrapper from 'ui/atoms/Wrapper';
import HeaderWrapper from 'ui/atoms/HeaderWrapper';
import Typography from 'ui/atoms/Typography';
const Header = () => {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = React.useState(false);
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

  return (
    <HeaderWrapper>
      <LogoIcon onClick={moveToMain}></LogoIcon>

      {isLogin ? (
        <Wrapper display="flex" justify="center" align="center">
          <Wrapper margin="0 11px 0 0">
            <AlarmIcon onClick={moveToNoti} />
          </Wrapper>
          <ProfileIcon onClick={moveToMypage}></ProfileIcon>
        </Wrapper>
      ) : (
        <Typography fontSize="14px" fontWeight="700" onClick={onClickLogin}>
          로그인
        </Typography>
      )}
    </HeaderWrapper>
  );
};

export default Header;
