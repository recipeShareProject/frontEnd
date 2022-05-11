import React from 'react';
import styled from 'styled-components';

function Squre() {
  return (
    <>
      <StyleSqure>Squre</StyleSqure>
    </>
  );
}

const StyleSqure = styled.div`
  width: 10%;
  height: 10%;
  background-color: red;
`;

export default Squre;
