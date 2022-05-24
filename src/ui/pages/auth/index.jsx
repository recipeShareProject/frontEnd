import React from 'react';
import {Route, Routes} from 'react-router-dom';
import Login from 'ui/pages/auth/Login';
import Profile from 'ui/pages/auth/Profile';

const Auth = () => {
  return (
    <Routes>
      <Route path={`/login`} element={<Login />} />
      <Route path={`/profile`} element={<Profile />} />
    </Routes>
  );
};

export default Auth;
