import React, {lazy, Suspense} from 'react';
import {Route, Routes, Navigate} from 'react-router-dom';
import PartyHome from 'ui/pages/party/Party';
import DetailParty from 'ui/pages/party/DetailParty';
import EditParty from 'ui/pages/party/EditParty';

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
