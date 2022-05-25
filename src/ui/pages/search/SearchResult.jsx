import React from 'react';
import SearchBar from 'ui/organisms/SearchBar';
import SearchFilter from 'ui/organisms/SearchFilter';
import SearchResultContent from 'ui/templates/SearchResultContent';
import FloatingButton from 'ui/atoms/FloatingButton';
import Header from 'ui/templates/header/Header';
const SearchResult = () => {
  return (
    <React.Fragment>
      <Header />
      <SearchBar />
      <SearchFilter />
      <SearchResultContent />
      <FloatingButton />
    </React.Fragment>
  );
};

export default SearchResult;
