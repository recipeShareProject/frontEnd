import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {PersistGate} from 'redux-persist/integration/react';
import store, {persistor} from 'redux/store';
import {Provider} from 'react-redux';

import AppWrapper from 'components/common/AppWrapper';
import Auth from 'pages/auth';
import Party from 'pages/party';
import TestPage from 'pages/TestPage';
import MainPage from 'pages/main/MainPage';
import Search from 'pages/search';
import SearchResult from 'pages/search/SearchResult';
import SearchFilter from 'pages/search/SearchFilter';
import ReciepeDetail from 'pages/recipe/RecipeDetail';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <AppWrapper>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<MainPage />} />
              <Route path="/search/*" element={<Search />} />
              <Route path="/search/result" element={<SearchResult />} />
              <Route path="/search/filter" element={<SearchFilter />} />
              <Route path="/recipe/detail" element={<ReciepeDetail />} />
              <Route path="/auth/*" element={<Auth />} />
              <Route path="/party/*" element={<Party />} />
              <Route path="/test" element={<TestPage />} />
            </Routes>
          </BrowserRouter>
        </AppWrapper>
      </PersistGate>
    </Provider>
  );
};

export default App;
