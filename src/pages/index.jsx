import React from 'react';
import {Routes, Route, useLocation, Navigate} from 'react-router-dom';
import {useSelector} from 'react-redux';

import Auth from './auth';
import Party from './party';
import MyPage from './myPage';
import Noti from './noti';

import TestPage from './TestPage';
const Pages = () => {
  return (
    <Routes>
      <Route path="/auth" element={<Auth />} />
      <Route path="/party" element={<Party />} />
      <Route path="/my" element={<MyPage />} />
      <Route path="/test" element={<TestPage />} />
      <Route path="/noti" element={<Noti />} />
    </Routes>
  );
};

export default Pages;
