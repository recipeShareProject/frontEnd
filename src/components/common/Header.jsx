import React from 'react';
import styled from 'styled-components';
import {useNavigate} from 'react-router-dom';

import NotificationsRoundedIcon from '@mui/icons-material/NotificationsRounded';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import MoreVertIcon from '@mui/icons-material/MoreVert';
function Header() {
  const navigate = useNavigate();
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
  const onClickBack = () => {
    navigate(-1);
  };
  return (
    // <StyleHeader>
    //   <StyleLogo onClick={onClickLogin}></StyleLogo>
    //   <StyleDiv>
    //     <StyleAlert onClick={onClickNoti}>
    //       <NotificationsRoundedIcon />
    //     </StyleAlert>
    //     <StyleAvata onClick={onClickProfil}></StyleAvata>
    //   </StyleDiv>
    //   {/* <StyleBtn onClick={onClickLogin}>로그인</StyleBtn> */}
    // </StyleHeader>
    <React.Fragment>
      <StyleHeader>
        <ArrowBackIosIcon onClick={onClickBack} fontSize="small" />
        <MoreVert />
        <DropdownContent>
          <div onClick={() => {}}>나눔 완료로 상태변경하기</div>
          <div onClick={() => {}}>수정하기</div>
          <div onClick={() => {}}>삭제하기</div>
        </DropdownContent>
      </StyleHeader>
    </React.Fragment>
  );
}

const StyleBtn = styled.div`
  height: 1rem;
  line-height: 1rem;

  cursor: pointer;
`;
const HeaderWrapper = styled.div`
  height: 72px;
  padding: 16px;
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

const DropdownContent = styled.div`
  display: none;
  width: 160px;
  height: 140px;
  z-index: 1;
  position: fixed;
  left: 180px;
  top: 60px;
  div {
    height: 40px;
    background-color: gray;
    padding-left: 0.5rem;
    /* margin-bottom: 0.5rem; */
    display: flex;
    align-items: center;

    cursor: pointer;
  }
  &:hover {
    display: block;
  }
  div:nth-child(n) {
    margin-bottom: 0.5rem;
  }
`;

const MoreVert = styled(MoreVertIcon)`
  &:hover + ${DropdownContent} {
    display: block;
  }
  cursor: pointer;
`;
export default Header;
