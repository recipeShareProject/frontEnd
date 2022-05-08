//TODO : 모바일 크기 컨테이너 여기서 맞추면 될 듯.
import React from 'react';
import styled from 'styled-components';

import Body from './Body';
import Header from './Header';
import Navigation from './Navigation';
function AppWrapper({children}) {
  return (
    <StyleApp>
      <Header />
      <Body>{children}</Body>
      <Navigation />
    </StyleApp>
  );
}

const StyleApp = styled.div`
  border: 1px solid red;
  height: 100%;
  padding: 1rem;
  box-sizing: border-box;
`;

export default AppWrapper;
