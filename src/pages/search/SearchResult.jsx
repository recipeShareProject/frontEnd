import React from 'react';
import styled from 'styled-components';
import SearchBar from 'components/common/SearchBar';
import MainBanner from 'components/main/MainBanner';
import SearchFilter from 'components/search/SearchFilter';
import SearchResultContent from 'components/search/SearchResultContent';

const SearchResult = () => {
  return (
    <div>
      <SearchBar />
      <SearchFilter />
      <SearchResultContent />
    </div>
  );
};

export default SearchResult;
