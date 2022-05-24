import React from 'react';
import SearchBar from 'ui/organisms/SearchBar';
import SearchFilter from 'ui/organisms/SearchFilter';
import SearchResultContent from 'ui/templates/SearchResultContent';
import FloatingButton from 'ui/atoms/FloatingButton';
const SearchResult = () => {
  return (
    <React.Fragment>
      <SearchBar />
      <SearchFilter />
      <SearchResultContent />
      <FloatingButton />
    </React.Fragment>
  );
};

export default SearchResult;
