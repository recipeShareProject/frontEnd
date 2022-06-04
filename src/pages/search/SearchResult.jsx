import React from 'react';
import SearchBar from 'tablet-ui/organisms/SearchBar';
import SearchFilter from 'ui/organisms/SearchFilter';
import SearchResultContent from 'ui/templates/SearchResultContent';
import FloatingButton from 'ui/atoms/FloatingButton';
import Header from 'ui/templates/header/Header';
import Navigation from 'ui/templates/navigation/Navigation';

const SearchResult = () => {
  return (
    <React.Fragment>
      <Header />
      <SearchBar />
      <SearchFilter />
      <SearchResultContent />
      <FloatingButton />
      <Navigation />
    </React.Fragment>
  );
};

export default SearchResult;
