import React from 'react';
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

export default MainPage;
