import React from 'react';
import styled from 'styled-components';

const Grid = ({children, columns = 'repeat(2,1fr)'}) => {
  return <StyledGrid columns={columns}>{children}</StyledGrid>;
};

export default Grid;
const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: ${(props) => props.columns};

  column-gap: 20px;
  row-gap: 24px;
`;
