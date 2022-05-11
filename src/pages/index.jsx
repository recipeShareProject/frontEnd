import React from 'react';
import {Routes, Route, useLocation, Navigate} from 'react-router-dom';
import {useSelector} from 'react-redux';

import Auth from './auth';
import Party from './party';
import MyPage from './myPage';
import Noti from './noti';
import Recipe from './recipe';
import Search from './search';

import TestPage from './TestPage';
const Pages = () => {
  return (
    <Routes>
      <Route path="/auth" element={<Auth />} />
      <Route path="/party" element={<Party />} />
      <Route path="/my" element={<MyPage />} />
      <Route path="/noti" element={<Noti />} />
      <Route path="/recipe" element={<Recipe />} />
      <Route path="/search" element={<Search />} />
      <Route path="/test" element={<TestPage />} />
    </Routes>
  );
};

export default Pages;
