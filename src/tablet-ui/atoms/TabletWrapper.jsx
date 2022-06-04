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
  /* height: 100vh;
  width: 100vw; */
`;

const Container = styled.div`
  width: 768px;

  position: relative;

  overflow: auto;

  border-radius: 5px;

  /* @media screen and (max-width: 480px) {
    width: 100vw;
    height: 100vh;
    padding: 0;
  /* } */
  ::-webkit-scrollbar {
    display: none;
  }
`;
export default TabletWrapper;
