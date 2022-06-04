import React from 'react';

import {useMediaQuery} from 'react-responsive';
import MainTemplate from 'ui/templates/main';
import MainTablet from 'tablet-ui/templates/main/MainTabletTemplate';
const MainPage = () => {
  const isTablet = useMediaQuery({query: '(min-width:768px)'});
  const isMobile = useMediaQuery({query: '(max-width:767px)'});
  return (
    <React.Fragment>
      {isMobile && <MainTemplate />}
      {isTablet && <MainTablet />}
    </React.Fragment>
  );
};

export default MainPage;
