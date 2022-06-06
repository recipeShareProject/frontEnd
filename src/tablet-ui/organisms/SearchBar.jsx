import React from 'react';
import styled from 'styled-components';
import SearchIcon from 'common/icons/SearchIcon';
import {Black20} from 'assets/colorSet';
import Box from 'ui/atoms/Box';

const SearchBar = ({width, margin}) => {
  return (
    <Box padding="1rem" width={width} margin={margin}>
      <SearchBarWrapper>
        <SearchIcon />
        <SearchInput placeholder="오늘은 무엇을 만들어볼까요?" />
      </SearchBarWrapper>
    </Box>
  );
};

const SearchBarWrapper = styled.div`
  height: 48px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid ${Black20};
  padding: 0px 1rem;
`;

const SearchInput = styled.input`
  width: 100%;
  border: none;
  background: none;
  margin-left: 10px;
  font-size: 14px;
  color: ${Black20};
`;
export default SearchBar;
