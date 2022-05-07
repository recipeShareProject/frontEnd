import React from 'react';
import {Routes, Route, useLocation, Navigate} from 'react-router-dom';
import {useSelector} from 'react-redux';

import Auth from './Auth';

const Pages = () => {
  return (
    <Routes>
      <Route path="/auth" element={<Auth />} />
    </Routes>
  );
};

export default Pages;
