import React from 'react';
import ProfileTemplate from 'ui/templates/auth/ProfileTemplate';

import {useSearchParams} from 'react-router-dom';
import {setCookie, getCookie} from 'common/presenters/Cookie';

const Profile = (props) => {
  // const navigate = useNavigate();
  // const [params] = useSearchParams();

  React.useEffect(() => {
    // const token = params.get('token');
    // setCookie('token', token);
    getCookie('token');
  }, []);

  return (
    <React.Fragment>
      <ProfileTemplate />
    </React.Fragment>
  );
};

export default Profile;
