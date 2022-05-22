import React, {lazy} from 'react';
import {Route, Routes, Outlet} from 'react-router-dom';

import SearchFilter from 'ui/pages/search/SearchFilter';
import SearchResult from 'ui/pages/search/SearchResult';
// const SearchFilter = lazy(() => import('pages/search/SearchFilter'));
// const SearchResult = lazy(() => import('pages/search/SearchResult'));

//Todo : 중첩 라우팅
const Search = () => {
  return (
    <Routes>
      <Route path="/result" element={<SearchResult />} />
      <Route path="/filter" element={<SearchFilter />} />
    </Routes>
    // <div>
    //   <Outlet />
    // </div>
  );
};

export default Search;
