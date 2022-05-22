import React from 'react';
import styled from 'styled-components';
import AddIcon from '@mui/icons-material/Add';
import {Navy100} from 'assets/colorSet';

const TextButton = ({children}) => {
  return (
    <AddButtonWrapper>
      <AddIcon />
      <AddButton>{children}</AddButton>
    </AddButtonWrapper>
  );
};

export default TextButton;

const AddButtonWrapper = styled.div`
  width: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 15px 0px;
  color: ${Navy100};
`;
const AddButton = styled.button`
  border: none;
  background: none;
  font-weight: 500;
`;
