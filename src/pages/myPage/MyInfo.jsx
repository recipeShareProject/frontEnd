import React from 'react';

import {useMediaQuery} from 'react-responsive';
import MyInfoTemplate from 'ui/templates/my/MyInfoTemplate';
import MyInfoTabletTemplate from 'tablet-ui/templates/my/MyInfoTabletTemplate';
const MyInfo = () => {
  const isTablet = useMediaQuery({query: '(min-width:768px)'});
  const isMobile = useMediaQuery({query: '(max-width:767.5px)'});
  return (
    <React.Fragment>
      {isMobile && <MyInfoTemplate />}
      {isTablet && <MyInfoTabletTemplate />}
    </React.Fragment>
  );
};

export default MyInfo;
