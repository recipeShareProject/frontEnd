import React from 'react';
import {useMediaQuery} from 'react-responsive';

import DetailTemplate from 'ui/templates/party/DetailPartyTemplate';
import DetailPartyTabletTemplate from 'tablet-ui/templates/party/DetailPartyTabletTemplate';
const DetailParty = () => {
  const isTablet = useMediaQuery({query: '(min-width:768px)'});
  const isMobile = useMediaQuery({query: '(max-width:767.5px)'});
  return (
    <React.Fragment>
      {isMobile && <DetailTemplate />}
      {isTablet && <DetailPartyTabletTemplate />}
    </React.Fragment>
  );
};

export default DetailParty;
