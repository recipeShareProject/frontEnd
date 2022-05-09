import React from 'react';
import styled from 'styled-components';
import AddRoundedIcon from '@mui/icons-material/AddRounded';
function Floating() {
  return (
    <FloatBtn>
      <AddRoundedIcon />
    </FloatBtn>
  );
}
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
`;
export default Floating;
