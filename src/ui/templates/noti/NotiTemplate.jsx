import React from 'react';
import styled from 'styled-components';

import HeaderBar from 'ui/templates/header/HeaderBar';
import Wrapper from 'ui/atoms/Wrapper';
import Divider from 'ui/atoms/Divider';
import NotiProfile from 'ui/organisms/NotiProfile';
const NotiTemplate = () => {
  return (
    <React.Fragment>
      <HeaderBar />
      <Wrapper padding="72px 0 0 0">
        <Wrapper padding="0 1rem">
          <h3>알림</h3>
          <StyleFlex>
            <div>비우기</div>
          </StyleFlex>
        </Wrapper>
        <Divider />
        <Wrapper padding="0 1rem">
          <NotiProfile />
        </Wrapper>
      </Wrapper>
    </React.Fragment>
  );
};
const StyleFlex = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export default NotiTemplate;
