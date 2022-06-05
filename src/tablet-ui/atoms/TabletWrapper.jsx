import React from 'react';
import styled from 'styled-components';
const TabletWrapper = ({children}) => {
  return (
    <Wrapper>
      <Container>{children}</Container>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  width: 768px;

  position: relative;

  overflow: auto;

  ::-webkit-scrollbar {
    display: none;
  }
`;
export default TabletWrapper;
