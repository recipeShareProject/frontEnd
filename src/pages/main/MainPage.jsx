import React from 'react';
import styled from 'styled-components';
import SearchBar from 'components/common/SearchBar';
import MainBanner from 'components/main/MainBanner';

const MainPage = () => {
  return (
    <div>
      <SearchBar />
      <MainBanner />
      <MainBanner />
    </div>
  );
};

const SearchBarWrapper = styled.div`
  background: #e5e5e5;
`;

export default MainPage;
