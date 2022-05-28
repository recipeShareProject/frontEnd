import React from 'react';
import {useSearchParams, useNavigate} from 'react-router-dom';
import {setCookie} from 'common/presenters/Cookie';
import {useDispatch} from 'react-redux';
const LoginToken = () => {
  const dispatch = useDispatch();
  const [params] = useSearchParams();
  const navigate = useNavigate();
  React.useEffect(() => {
    const token = params.get('token');
    if (token) {
      setCookie('token', token);
      navigate('/auth/profile');
    } else {
      navigate('/auth/login');
    }
  }, []);
  return <div>LoginToken</div>;
};

export default LoginToken;
