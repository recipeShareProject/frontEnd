import React from 'react';
import {Route, Routes} from 'react-router-dom';

import NotiPage from 'pages/noti/Noti';

const Noti = () => {
  return (
    <Routes>
      <Route path={'/'} element={<NotiPage />} />
    </Routes>
  );
};

export default Noti;
