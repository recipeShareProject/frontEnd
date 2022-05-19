import React from 'react';
import SearchBar from 'components/common/SearchBar';
import MainBanner from 'components/main/MainBanner';

const MainPage = () => {
  return (
    <React.Fragment>
      <SearchBar />
      <MainBanner />
      <MainBanner />
    </React.Fragment>
  );
};

export default MainPage;
