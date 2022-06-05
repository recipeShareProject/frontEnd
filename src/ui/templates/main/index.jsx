import React from 'react';
import SearchBar from 'tablet-ui/organisms/SearchBar';
import MainBanner from 'ui/organisms/MainBanner';
import Floating from 'ui/atoms/FloatingButton';
import Header from 'ui/templates/header/Header';
import Navigation from 'ui/templates/navigation/Navigation';

import Divider from 'ui/atoms/Divider';
import Wrapper from 'ui/atoms/Wrapper';

const MainTemplate = () => {
  return (
    <React.Fragment>
      <Header />
      <Wrapper padding="72px 0 60px 0">
        <SearchBar />
        <Divider />
        <MainBanner title={'지금 가장 \n인기있는 레시피에요'} />
        <Divider />
        <MainBanner title={'빠르게 \n만들 수 있어요'} />
        <Floating />
      </Wrapper>
      <Navigation />
    </React.Fragment>
  );
};

export default MainTemplate;
