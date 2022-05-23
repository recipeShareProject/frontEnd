import React from 'react';
import {useNavigate} from 'react-router-dom';

import LogoIcon from 'common/icons/LogoIcon';
import AlarmIcon from 'common/icons/AlarmIcon';
import ProfileIcon from 'common/icons/ProfileIcon';

import Wrapper from 'ui/atoms/Wrapper';
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
    <Wrapper
      width="100%"
      height="72px"
      padding="24px 16px 16px 16px"
      background="white"
      display="flex"
      justify="space-between"
      align="center"
      position="fixed"
      boxSizing="border-box">
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
    </Wrapper>
  );
};

export default Header;
