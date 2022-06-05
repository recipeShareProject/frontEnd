import React from 'react';
import {useMediaQuery} from 'react-responsive';

import MyPostTemplate from 'ui/templates/my/MyPostTemplate';
import MyPostTabletTemplate from 'tablet-ui/templates/my/MyPostTabletTemplate';
const MyPost = () => {
  const isTablet = useMediaQuery({query: '(min-width:768px)'});
  const isMobile = useMediaQuery({query: '(max-width:767.5px)'});
  return (
    <React.Fragment>
      {isMobile && <MyPostTemplate />}
      {isTablet && <MyPostTabletTemplate />}
    </React.Fragment>
  );
};

export default MyPost;
