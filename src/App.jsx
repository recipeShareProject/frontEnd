import React from 'react';
import {Routes, Route} from 'react-router-dom';
import {PersistGate} from 'redux-persist/integration/react';
import store, {persistor} from 'redux/store';
import {Provider} from 'react-redux';

import Auth from 'ui/pages/auth';
import Party from 'ui/pages/party';
import MyPage from 'ui/pages/myPage';
import Noti from 'ui/pages/noti';
import MainPage from 'ui/pages/main/MainPage';
import Search from 'ui/pages/search';
import Recipe from 'ui/pages/recipe';
import BookMarkPage from 'ui/pages/bookmark/BookMarkPage';

import ApiTest from 'ui/pages/test/ApiTest';
import TestPage from 'ui/pages/test/TestPage';
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
          <Route path="/test" element={<TestPage />} />
          <Route path="testApi" element={<ApiTest />} />
        </Routes>
      </PersistGate>
    </Provider>
  );
};

export default App;
