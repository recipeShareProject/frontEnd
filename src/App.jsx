import React from 'react';
import {Routes, Route} from 'react-router-dom';
import {PersistGate} from 'redux-persist/integration/react';
import store, {persistor} from 'redux/store';
import {Provider} from 'react-redux';

import AppWrapper from 'components/common/AppWrapper';
import Auth from 'ui/pages/auth';
import Party from 'ui/pages/party';
import MyPage from 'ui/pages/myPage';
import Noti from 'ui/pages/noti';
import TestPage from 'ui/pages/test/TestPage';
import MainPage from 'ui/pages/main/MainPage';
import Search from 'ui/pages/search';
import Recipe from 'ui/pages/recipe';
import BookMarkPage from 'ui/pages/bookmark/BookMarkPage';
import Header from 'ui/organisms/Header';
import Navigation from 'ui/organisms/Navigation';
import ApiTest from 'ui/pages/test/ApiTest';
import SearchResult from 'ui/pages/search/SearchResult';

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
      </PersistGate>
    </Provider>
  );
};

export default App;
