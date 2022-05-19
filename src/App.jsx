import React from 'react';
import {Routes, Route} from 'react-router-dom';
import {PersistGate} from 'redux-persist/integration/react';
import store, {persistor} from 'redux/store';
import {Provider} from 'react-redux';

import AppWrapper from 'components/common/AppWrapper';
import Auth from 'pages/auth';
import Party from 'pages/party';
import MyPage from 'pages/myPage';
import Noti from 'pages/noti';
import TestPage from 'pages/TestPage';
import MainPage from 'pages/main/MainPage';
import Search from 'pages/search';
import Recipe from 'pages/recipe';
import BookMarkPage from 'pages/bookmark/BookMarkPage';
import Header from 'components/common/Header';
import Navigation from 'components/common/Navigation';
import ApiTest from 'pages/ApiTest';
import Popup from 'components/modal/Popup';
import SearchResult from 'pages/search/SearchResult';
const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Header />
        <AppWrapper>
          <Routes>
            <Route path="/" exact={true} element={<MainPage />} />
            <Route path="/search/*" element={<Search />} />
            <Route
              path="/search/result"
              exact={true}
              element={<SearchResult />}
            />
            <Route path="/recipe/*" element={<Recipe />} />
            <Route path="/auth/*" element={<Auth />} />
            <Route path="/party/*" element={<Party />} />
            <Route path="/my/*" element={<MyPage />} />
            <Route path="/noti/*" element={<Noti />} />
            <Route path="/bookmark" element={<BookMarkPage />} />
            <Route path="/test" element={<TestPage />} />
            <Route path="testApi" element={<ApiTest />} />
          </Routes>
        </AppWrapper>
        <Navigation />
        <Popup></Popup>
      </PersistGate>
    </Provider>
  );
};

export default App;
