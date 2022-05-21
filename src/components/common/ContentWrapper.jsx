import React from 'react';
import styled from 'styled-components';

const ContentWrapper = ({children}) => {
  return <BodyDiv>{children}</BodyDiv>;
};
const BodyDiv = styled.div`
  position: relative;
  height: calc(100vh - 132px);
  padding: 0 16px;
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
