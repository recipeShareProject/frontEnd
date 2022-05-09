import React, {lazy} from 'react';
import {Route, Routes, Outlet} from 'react-router-dom';

const SearchFilter = lazy(() => import('pages/search/SearchFilter'));
const SearchResult = lazy(() => import('pages/search/SearchResult'));

//Todo : 중첩 라우팅
const Search = () => {
  return (
    // <Route>
    //   <Route path="/result" element={<SearchResult />} />
    //   <Route path="/filter" element={<SearchFilter />} />
    // </Route>
    <div>
      <Outlet />
    </div>
  );
};

export default Search;
