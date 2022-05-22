import React from 'react';
import SearchBar from 'ui/organisms/SearchBar';
import SearchFilter from 'ui/organisms/SearchFilter';
import SearchResultContent from 'ui/templates/SearchResultContent';

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
