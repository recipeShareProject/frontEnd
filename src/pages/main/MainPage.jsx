import React from 'react';
import SearchBar from 'components/common/SearchBar';
import MainBanner from 'components/main/MainBanner';
import Floating from 'components/common/Floating';

const MainPage = () => {
  return (
    <div>
      <SearchBar />
      {/* TODO : 줄바꿈 */}
      <MainBanner title={'지금 가장 \n인기있는 레시피에요'} />
      <MainBanner title={'빠르게 \n만들 수 있어요'} />
      <Floating />
    </div>
  );
};

export default MainPage;
