import React from 'react';
import styled from 'styled-components';
import Floating from './Floating';

function ContentWrapper({children}) {
  return (
    <BodyDiv>
      {children}
      <Floating />
    </BodyDiv>
  );
}
const BodyDiv = styled.div`
  position: relative;
  height: calc(100vh - 164px);
  width: 100%;
  overflow: auto;
  box-sizing: border-box;

  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */

  ::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera*/
  }
`;
export default ContentWrapper;
