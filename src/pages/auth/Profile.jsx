import React from 'react';
import ProfileTemplate from 'ui/templates/auth/ProfileTemplate';

import {useSearchParams} from 'react-router-dom';
import {setCookie, getCookie} from 'common/presenters/Cookie';

const Profile = (props) => {
  return (
    <React.Fragment>
      <ProfileTemplate />
    </React.Fragment>
  );
};

export default Profile;
