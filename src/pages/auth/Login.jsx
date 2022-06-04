import React from 'react';
import {useMediaQuery} from 'react-responsive';
import LoginTemplate from 'ui/templates/auth/LoginTemplate';
import LoginTabletTemplate from 'tablet-ui/templates/auth/LoginTabletTemplate';
const Login = () => {
  const isTablet = useMediaQuery({query: '(min-width:768px)'});
  const isMobile = useMediaQuery({query: '(max-width:767px)'});
  return (
    <React.Fragment>
      {isMobile && <LoginTemplate />}
      {isTablet && <LoginTabletTemplate />}
    </React.Fragment>
  );
};

export default Login;
