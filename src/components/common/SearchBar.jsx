import React from 'react';
import styled from 'styled-components';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';

const SearchBar = () => {
  return (
    <SearchBarWrapper>
      <SearchIcon />
      <SearchInput placeholder="오늘은 무엇을 만들어볼까요" />
      <CloseIcon />
    </SearchBarWrapper>
  );
};

const SearchBarWrapper = styled.div`
  background: #e5e5e5;
  height: 48px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1rem;
  padding: 0px 1rem;
`;

const SearchInput = styled.input`
  width: 100%;
  border: none;
  background: none;
`;
export default SearchBar;
