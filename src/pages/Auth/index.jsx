import PageLoader from 'components/common/PageLoader';
import React, {lazy, Suspense} from 'react';
import {Route, Routes, Navigate} from 'react-router-dom';

const SignUp = lazy(() => import('pages/Auth/SignUp'));
const Login = lazy(() => import('pages/Auth/Login'));
const Auth = () => {
  return (
    <Routes>
      <Route path={`/signup`} element={<SignUp />} />
      <Route path={`/login`} element={<Login />} />
    </Routes>
  );
};

export default Auth;
