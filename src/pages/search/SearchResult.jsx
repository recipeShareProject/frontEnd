import React from 'react';
import styled from 'styled-components';
import SearchBar from 'components/common/SearchBar';
import MainBanner from 'components/main/MainBanner';
import SearchFilter from 'components/search/SearchFilter';
import SearchResultContent from 'components/search/SearchResultContent';

import {useNavigate} from 'react-router-dom';
const SearchResult = () => {
  const navigate = useNavigate();
  return (
    <div>
      <SearchBar />
      <SearchFilter _onClick={() => navigate('../filter')} />
      <SearchResultContent />
    </div>
  );
};

export default SearchResult;
