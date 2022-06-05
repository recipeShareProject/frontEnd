import React from 'react';
import {useMediaQuery} from 'react-responsive';

import MyTemplate from 'ui/templates/my/MyTemplate';
import MyTabletTemplate from 'tablet-ui/templates/my/MyTabletTemplate';
const My = () => {
  const isTablet = useMediaQuery({query: '(min-width:768px)'});
  const isMobile = useMediaQuery({query: '(max-width:767.5px)'});
  return (
    <React.Fragment>
      {isMobile && <MyTemplate />}
      {isTablet && <MyTabletTemplate />}
    </React.Fragment>
  );
};
export default My;
