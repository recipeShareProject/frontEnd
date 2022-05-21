import React from 'react';
import styled from 'styled-components';

const Squre = ({children}) => {
  return (
    <>
      <StyleSqure>{children}</StyleSqure>
    </>
  );
};

const StyleSqure = styled.div`
  width: 10vw;
  height: 10vw;

  background-color: red;

  display: inline-block;
`;

export default Squre;
