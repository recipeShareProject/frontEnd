import React from 'react';
import {useNavigate} from 'react-router';
import styled from 'styled-components';

const SearchFilter = () => {
  const navigate = useNavigate();

  const moveToSetFilterPage = () => {
    navigate('/search/filter');
  };
  return (
    <ButtonGroup>
      <Button onClick={() => moveToSetFilterPage()}>필터</Button>
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
