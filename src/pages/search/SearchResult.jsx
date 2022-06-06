import React from 'react';
import {useMediaQuery} from 'react-responsive';
import SearchResultTemplate from 'ui/templates/search/SearchResultTemplate';
import SearchResultTabletTemplate from 'tablet-ui/templates/search/SearchResultTemplate';

const SearchResult = () => {
  const isTablet = useMediaQuery({query: '(min-width:768px)'});
  const isMobile = useMediaQuery({query: '(max-width:767.5px)'});
  return (
    <React.Fragment>
      {isMobile && <SearchResultTemplate />}
      {isTablet && <SearchResultTabletTemplate />}
    </React.Fragment>
  );
};

export default SearchResult;
