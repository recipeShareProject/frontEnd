import React from 'react';
import SearchBar from 'components/common/SearchBar';
import MainBanner from 'components/main/MainBanner';

const MainPage = () => {
  return (
    <div>
      <SearchBar />
      {/* TODO : 줄바꿈 */}
      <MainBanner title="지금 가장 인기있는 레시피에요" />
      <MainBanner title="빠르게 만들 수 있어요" />
    </div>
  );
};

export default MainPage;
