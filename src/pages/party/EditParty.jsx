import React from 'react';
import {useMediaQuery} from 'react-responsive';

import WritePostTemplate from 'ui/templates/party/WritePartyTemplate';
import WritePostTabletTemplate from 'tablet-ui/templates/party/WritePostTabletTemplate';
const EditParty = ({type}) => {
  const isTablet = useMediaQuery({query: '(min-width:768px)'});
  const isMobile = useMediaQuery({query: '(max-width:767px)'});

  return (
    <React.Fragment>
      {isMobile && <WritePostTemplate type={type} />}
      {isTablet && <WritePostTabletTemplate type={type} />}
    </React.Fragment>
  );
};

export default EditParty;
