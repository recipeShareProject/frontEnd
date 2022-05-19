import PageLoader from 'components/common/PageLoader';
import React, {lazy, Suspense} from 'react';
import {Route, Routes, Navigate} from 'react-router-dom';
import PartyHome from 'pages/party/Party';
import DetailParty from 'pages/party/DetailParty';
import EditParty from 'pages/party/EditParty';

const Party = () => {
  return (
    <Routes>
      <Route path={'/'} element={<PartyHome />} />
      <Route path={`/detailParty/:postId`} element={<DetailParty />} />
      <Route path={`/addParty`} element={<EditParty />} />
      <Route path={`/modiParty/:postId`} element={<EditParty />} />
    </Routes>
  );
};

export default Party;
