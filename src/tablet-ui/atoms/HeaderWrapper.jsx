import React from 'react';
import styled from 'styled-components';

const HeaderWrapper = ({children}) => {
  return <StyledWrapper>{children}</StyledWrapper>;
};

const StyledWrapper = styled.div`
  padding: 24px 64px 16px 64px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 768px;
  height: 72px;
  background: white;
  box-sizing: border-box;
  z-index: 100;
  position: fixed;
`;

export default HeaderWrapper;
