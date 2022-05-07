import PageLoader from 'components/common/PageLoader';
import React, {lazy, Suspense} from 'react';
import {Route, Routes, Navigate} from 'react-router-dom';
import SignUp from 'pages/Auth/SignUp';
import Login from 'pages/Auth/Login';

const Auth = () => {
  return (
    <Routes>
      <Route path={`/party`} element={<SignUp />} />
      <Route path={`/partyDetail/:postId`} element={<Login />} />
      <Route path={`/partyAdd`} element={<Login />} />
      <Route path={`/partyModi/:postId`} element={<Login />} />
    </Routes>
  );
};

export default Auth;
