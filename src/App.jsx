import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
// import {PersistGate} from 'redux-persist/integration/react';
import Pages from 'pages';
import AppWrapper from 'components/common/AppWrapper';
// export const {store, persistor} = configureStore();
import Header from 'components/common/Header';
import DetailHeader from 'components/common/DetailHeader';
import Auth from 'pages/Auth';
import Party from 'pages/party';
import Navigation from 'components/common/Navigation';

const App = () => {
  return (
    // <PersistGate loading={null} persistor={persistor}>

    <AppWrapper>
      <BrowserRouter>
        <Routes>
          <Route path="/auth/*" element={<Auth />} />
          <Route path="/party/*" element={<Party />} />
        </Routes>
      </BrowserRouter>
    </AppWrapper>
    // </PersistGate>
  );
};

export default App;
