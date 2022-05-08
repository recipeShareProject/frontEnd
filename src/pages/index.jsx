import React from 'react';
import {Routes, Route, useLocation, Navigate} from 'react-router-dom';
import {useSelector} from 'react-redux';

import Auth from './auth';
import Party from './party';
import TestPage from './TestPage';
const Pages = () => {
  return (
    <Routes>
      <Route path="/auth" element={<Auth />} />
      <Route path="/party" element={<Party />} />
      <Route path="/test" element={<TestPage />} />
    </Routes>
  );
};

export default Pages;
