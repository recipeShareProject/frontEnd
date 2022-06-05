import React from 'react';
import SearchBar from 'tablet-ui/organisms/SearchBar';
import SearchFilter from 'ui/organisms/SearchFilter';
import SearchResultContent from 'ui/templates/SearchResultContent';
import FloatingButton from 'ui/atoms/FloatingButton';
import Header from 'ui/templates/header/Header';
import Navigation from 'ui/templates/navigation/Navigation';
import Wrapper from 'ui/atoms/Wrapper';

const SearchResultTemplate = () => {
  return (
    <React.Fragment>
      <Header />
      <Wrapper padding="72px 0 60px 0">
        <SearchBar />
        <SearchFilter />
        <SearchResultContent />
        <FloatingButton />
      </Wrapper>
      <Navigation />
    </React.Fragment>
  );
};

export default SearchResultTemplate;
