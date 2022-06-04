import React from 'react';
import {useMediaQuery} from 'react-responsive';

import ProfileTemplate from 'ui/templates/auth/ProfileTemplate';
import ProfileTabletTemplate from 'tablet-ui/templates/auth/ProfileTabletTemplate';

const Profile = (props) => {
  const isTablet = useMediaQuery({query: '(min-width:768px)'});
  const isMobile = useMediaQuery({query: '(max-width:767.5px)'});
  return (
    <React.Fragment>
      {isMobile && <ProfileTemplate />}
      {isTablet && <ProfileTabletTemplate />}
    </React.Fragment>
  );
};

export default Profile;
