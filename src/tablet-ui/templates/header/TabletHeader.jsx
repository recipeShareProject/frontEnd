import React from 'react';
import {useNavigate} from 'react-router-dom';
import {useSelector} from 'react-redux';

import {getCookie} from 'common/presenters/Cookie';

import AlarmIcon from 'common/icons/AlarmIcon';
import ProfileIcon from 'common/icons/ProfileIcon';

import Wrapper from 'tablet-ui/atoms/Wrapper';
import HeaderWrapper from 'tablet-ui/atoms/HeaderWrapper';
import Typography from 'tablet-ui/atoms/Typography';
import AddIcon from '@mui/icons-material/Add';

import Navi from 'tablet-ui/organisms/main/Navi';
import DropPopup from 'tablet-ui/organisms/main/DropPopup';
import DropAlert from 'tablet-ui/organisms/main/DropAlert';
const TabletHeader = () => {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = React.useState(false);
  const user = useSelector((state) => state.user.user);
  const [open, setOpen] = React.useState(false);
  const [openAlert, setOpenAlert] = React.useState(false);
  React.useEffect(() => {
    const token = getCookie('token');
    setIsLogin(user?.name !== undefined && token !== undefined);
    return setOpen(false);
  }, []);
  const showPopup = () => {
    setOpen(true);
  };
  const moveToNoti = () => {
    setOpenAlert(true);
  };

  const moveToMypage = () => {
    navigate('/my');
  };

  const onClickLogin = () => {
    navigate('/auth/login');
  };

  return (
    <HeaderWrapper>
      <Wrapper display="flex" justify="center" align="center">
        <Navi />
      </Wrapper>

      {isLogin ? (
        <Wrapper display="flex" justify="b" align="center">
          <Wrapper _onClick={showPopup} margin="0 19px 0 0">
            <AddIcon />
          </Wrapper>
          <Wrapper _onClick={moveToNoti} margin="0 19px 0 0">
            {/* 
            todo:서버개발
            <AlarmIcon /> */}
          </Wrapper>
          <ProfileIcon src={user.imageUrl} onClick={moveToMypage}></ProfileIcon>
        </Wrapper>
      ) : (
        <Typography fontSize="14px" fontWeight="700" onClick={onClickLogin}>
          로그인
        </Typography>
      )}

      {open && <DropPopup setOpen={setOpen} />}
      {openAlert && <DropAlert setOpen={setOpenAlert} />}
    </HeaderWrapper>
  );
};

export default TabletHeader;
