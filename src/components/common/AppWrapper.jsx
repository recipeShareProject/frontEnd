//TODO : 모바일 크기 컨테이너 여기서 맞추면 될 듯.
import React from 'react';
import styled from 'styled-components';

import ContentWrapper from './ContentWrapper';

function AppWrapper({children}) {
  return (
    <>
      <ContentWrapper>{children}</ContentWrapper>
    </>
  );
}

export default AppWrapper;
