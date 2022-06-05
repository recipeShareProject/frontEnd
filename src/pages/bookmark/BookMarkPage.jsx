import React from 'react';

import BookMarkTemplate from 'ui/templates/bookmark/BookMarkTemplate';
import BookmarkTabletTemplate from 'tablet-ui/templates/bookmark/BookmarkTabletTemplate';
import {useMediaQuery} from 'react-responsive';
const BookMarkPage = () => {
  const isTablet = useMediaQuery({query: '(min-width:768px)'});
  const isMobile = useMediaQuery({query: '(max-width:767.5px)'});
  return (
    <React.Fragment>
      {isMobile && <BookMarkTemplate />}
      {isTablet && <BookmarkTabletTemplate />}
    </React.Fragment>
  );
};
export default BookMarkPage;
