import React from 'react';
import {Route, Routes} from 'react-router-dom';

import My from 'pages/myPage/My';
import MyInfo from 'pages/myPage/MyInfo';
import MyPost from 'pages/myPage/MyPost';

const MyPage = () => {
  return (
    <Routes>
      <Route path={'/'} element={<My />} />
      <Route path={'/myInfo'} element={<MyInfo />} />
      <Route path={'/myPost'} element={<MyPost />} />
    </Routes>
  );
};

export default MyPage;
