import React from 'react';
import styled from 'styled-components';

import NotificationsRoundedIcon from '@mui/icons-material/NotificationsRounded';
function Header() {
  return (
    <StyleHeader>
      <StyleLogo></StyleLogo>
      <StyleDiv>
        <StyleAlert>
          <NotificationsRoundedIcon />
        </StyleAlert>
        <StyleAvata></StyleAvata>
      </StyleDiv>
      {/* <StyleBtn>로그인</StyleBtn> */}
    </StyleHeader>
  );
}
const StyleBtn = styled.div`
  height: 1rem;
  line-height: 1rem;

  cursor: pointer;
`;

const StyleHeader = styled.div`
  border: 1px solid green;
  height: 72px;

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
`;

const StyleAvata = styled.div`
  border-radius: 50%;
  background-color: gray;
  height: 2.25rem;
  width: 2.25rem;
`;

export default Header;
