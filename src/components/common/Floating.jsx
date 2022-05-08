import React from 'react';
import styled from 'styled-components';
import AddIcon from '@mui/icons-material/Add';

const Floating = () => {
  return (
    <FloatBtn>
      <AddIcon />
    </FloatBtn>
  );
};
const FloatBtn = styled.div`
  border-radius: 50%;
  background-color: black;
  color: white;
  width: 3rem;
  height: 3rem;
  text-align: center;
  position: fixed;
  left: calc(100% - 4rem);
  top: calc(100% - 8rem);
  display: flex;
  justify-content: center;
  align-items: center;
`;
export default Floating;
