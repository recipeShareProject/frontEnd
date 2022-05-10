import React from 'react';
import {Route, Routes} from 'react-router-dom';
import Login from 'pages/auth/Login';
import Profil from 'pages/auth/Profil';

const Auth = () => {
  return (
    <Routes>
      <Route path={`/login`} element={<Login />} />
      <Route path={`/profil`} element={<Profil />} />
    </Routes>
  );
};

export default Auth;
