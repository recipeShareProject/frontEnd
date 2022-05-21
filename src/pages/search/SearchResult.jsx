import React from 'react';
import SearchBar from 'components/common/SearchBar';
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
