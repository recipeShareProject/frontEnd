import React from 'react';
import {Routes, Route} from 'react-router-dom';
import {PersistGate} from 'redux-persist/integration/react';
import store, {persistor} from 'redux/store';
import {Provider} from 'react-redux';

import styled from 'styled-components';

import Auth from 'pages/auth';
import Party from 'pages/party';
import MyPage from 'pages/myPage';
import Noti from 'pages/noti';
import MainPage from 'pages/main/MainPage';
import Search from 'pages/search';
import Recipe from 'pages/recipe';
import BookMarkPage from 'pages/bookmark/BookMarkPage';

import ApiTest from 'pages/test/ApiTest';
import TestPage from 'pages/test/TestPage';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Routes>
          <Route path="/" exact={true} element={<MainPage />} />
          <Route path="/search/*" element={<Search />} />
          <Route path="/recipe/*" element={<Recipe />} />
          <Route path="/auth/*" element={<Auth />} />
          <Route path="/party/*" element={<Party />} />
          <Route path="/my/*" element={<MyPage />} />
          <Route path="/noti/*" element={<Noti />} />
          <Route path="/bookmark" element={<BookMarkPage />} />
          <Route path="/auth/test" element={<TestPage />} />
          <Route path="testApi" element={<ApiTest />} />
        </Routes>
      </PersistGate>
    </Provider>
  );
};

export default App;
