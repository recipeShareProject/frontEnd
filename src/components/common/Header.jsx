import React from 'react';
import styled from 'styled-components';
import {useNavigate, useLocation, useParams} from 'react-router-dom';

import NotificationsRoundedIcon from '@mui/icons-material/NotificationsRounded';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import MoreVertIcon from '@mui/icons-material/MoreVert';

import Foobar from 'components/common/FooBar';
function Header() {
  const navigate = useNavigate();
  const loca = useLocation();
  const postId = loca.pathname.split('/')[3];
  const onClickLogo = () => {
    navigate('/');
  };
  const onClickNoti = () => {
    navigate('/noti');
  };
  const onClickProfil = () => {
    navigate('/my');
  };
  const onClickLogin = () => {
    navigate('/auth/login');
  };

  switch (loca.pathname) {
    case loca.pathname.includes(`/my`) ? loca.pathname : '':
    case '/search/filter':
    case '/recipe/write':
    case '/party/addParty':
      return <Foobar type="back" />;

    // case `/recipe/detail/${postId}`:
    case loca.pathname.includes(`/recipe/detail`) ? loca.pathname : '':
      return <Foobar type="recipe" />;

    case `/party/detailParty/${postId}`:
      return <Foobar type="party" />;

    default:
      return (
        <StyleHeader>
          <StyleLogo onClick={onClickLogin}></StyleLogo>
          <StyleDiv>
            <StyleAlert onClick={onClickNoti}>
              <NotificationsRoundedIcon />
            </StyleAlert>
            <StyleAvata onClick={onClickProfil}></StyleAvata>
          </StyleDiv>
          {/* <StyleBtn onClick={onClickLogin}>로그인</StyleBtn> */}
        </StyleHeader>
      );
  }
}

const StyleBtn = styled.div`
  height: 1rem;
  line-height: 1rem;
  cursor: pointer;
`;

const StyleHeader = styled.div`
  height: 40px;
  padding: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyleLogo = styled.div`
  background-color: gray;
  height: 2rem;
  width: 6rem;
  cursor: pointer;
`;

const StyleDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;
const StyleAlert = styled.div`
  background-color: gray;
  height: 2rem;
  width: 2rem;
  margin-right: 0.75rem;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const StyleAvata = styled.div`
  border-radius: 50%;
  background-color: gray;
  height: 2.25rem;
  width: 2.25rem;
`;

export default Header;
