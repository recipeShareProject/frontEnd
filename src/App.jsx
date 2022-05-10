import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {PersistGate} from 'redux-persist/integration/react';
import store, {persistor} from 'redux/store';
import {Provider} from 'react-redux';

import AppWrapper from 'components/common/AppWrapper';
import Auth from 'pages/auth';
import Party from 'pages/party';
import MyPage from 'pages/myPage';
import Noti from 'pages/noti';
import TestPage from 'pages/TestPage';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <AppWrapper>
          <BrowserRouter>
            <Routes>
              <Route path="/auth/*" element={<Auth />} />
              <Route path="/party/*" element={<Party />} />
              <Route path="/my/*" element={<MyPage />} />
              <Route path="/noti/*" element={<Noti />} />
              <Route path="/test" element={<TestPage />} />
            </Routes>
          </BrowserRouter>
        </AppWrapper>
      </PersistGate>
    </Provider>
  );
};

export default App;
