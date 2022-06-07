import React from 'react';
import {Route, Routes} from 'react-router-dom';

import SearchFilter from 'pages/search/SearchFilter';
import SearchResult from 'pages/search/SearchResult';

const Search = () => {
  return (
    <Routes>
      <Route path="/result" element={<SearchResult />} />
      <Route path="/filter" element={<SearchFilter />} />
    </Routes>
  );
};

export default Search;
