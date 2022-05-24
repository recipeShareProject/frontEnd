import React from 'react';
import styled from 'styled-components';

const HeaderWrapper = ({children}) => {
  return <StyledWrapper>{children}</StyledWrapper>;
};

const StyledWrapper = styled.div`
  padding: 24px 16px 16px 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 72px;
  background: white;
  position: fixed;
  box-sizing: border-box;
  z-index: 100;
`;

export default HeaderWrapper;
