import React from 'react';
import SearchBar from 'ui/organisms/SearchBar';
import MainBanner from 'ui/templates/MainBanner';
import Floating from 'ui/atoms/FloatingButton';

const MainPage = () => {
  return (
    <div>
      <SearchBar />
      <MainBanner title={'지금 가장 \n인기있는 레시피에요'} />
      <MainBanner title={'빠르게 \n만들 수 있어요'} />
      <Floating />
    </div>
  );
};

export default MainPage;
