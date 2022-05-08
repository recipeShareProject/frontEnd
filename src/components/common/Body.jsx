import React from 'react';
import styled from 'styled-components';
import Floating from './Floating';
function Body({children}) {
  return (
    <BodyDiv>
      {children}
      <Floating />
    </BodyDiv>
  );
}
const BodyDiv = styled.div`
  position: relative;
  height: calc(769px - 152px);
  overflow: auto;
  box-sizing: border-box;
`;
export default Body;
