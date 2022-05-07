import React from 'react';
import {Routes, Route, useLocation, Navigate} from 'react-router-dom';
import {useSelector} from 'react-redux';

import Auth from './Auth';
import Party from './party';

const Pages = () => {
  return (
    <Routes>
      <Route path="/auth" element={<Auth />} />
      <Route path="/party" element={<Party />} />
    </Routes>
  );
};

export default Pages;
