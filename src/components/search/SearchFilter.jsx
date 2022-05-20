import React from 'react';
import styled from 'styled-components';

const SearchFilter = () => {
  return (
    <ButtonGroup>
      <Button>필터</Button>
      <Button>매칭률순</Button>
    </ButtonGroup>
  );
};

const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 0.5rem 0px;
`;

const Button = styled.button`
  border: none;
  background: none;
  width: 100%;
  padding: 10px;
  font-weight: 500;
`;

export default SearchFilter;
