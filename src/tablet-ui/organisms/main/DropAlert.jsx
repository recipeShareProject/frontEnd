import React from 'react';
import styled from 'styled-components';
import {useNavigate} from 'react-router-dom';
import Typography from 'tablet-ui/atoms/Typography';

import Wrapper from 'tablet-ui/atoms/Wrapper';
import AlertProfile from 'tablet-ui/organisms/header/AlertProfile';

const DropAlert = ({setOpen}) => {
  return (
    <React.Fragment>
      <CloseEffect onClick={() => setOpen(false)}></CloseEffect>
      <DropdownContent>
        <Wrapper
          display="flex"
          align="center"
          justify="end"
          background="white"
          padding="0 0 20px 0">
          <Typography fontSize="14px" fontWeight="500" onClick={() => {}}>
            비우기
          </Typography>
        </Wrapper>
        <AlertProfile />
        <AlertProfile />
        <AlertProfile disabled="true" />
        <AlertProfile />
        <AlertProfile />
        <AlertProfile />
        <AlertProfile />
      </DropdownContent>
    </React.Fragment>
  );
};

const CloseEffect = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  left: 0;
  top: 0;
`;
const DropdownContent = styled.div`
  width: 358px;
  height: 417px;
  position: absolute;
  left: 346px;
  top: 72px;
  overflow: scroll;

  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  font-size: 12px;
  border-radius: 4px;
  border: 1px solid Black10;
  padding: 32px 24px;
  box-sizing: border-box;
`;

export default DropAlert;
