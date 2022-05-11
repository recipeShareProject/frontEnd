import {Button} from '@mui/material';
import React from 'react';
import styled from 'styled-components';

const SearchFilter = () => {
  return (
    <ButtonGroup>
      <Button fullWidth>필터</Button>
      <Button fullWidth>조회순</Button>
    </ButtonGroup>
  );
};

const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 0.5rem 0px;
`;

export default SearchFilter;
