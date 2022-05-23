import {Black5} from 'assets/colorSet';
import React from 'react';
import styled from 'styled-components';

const Divider = () => {
  return <StyledDivider></StyledDivider>;
};

export default Divider;

const StyledDivider = styled.div`
  width: 100%;
  height: 16px;
  background: ${Black5};
`;
