import React from 'react';
import {useMediaQuery} from 'react-responsive';
import PartyTemplate from 'ui/templates/party/PartyTemplate';
import PartyTabletTemplate from 'tablet-ui/templates/party/PartyTabletTemplate';
const Party = () => {
  const isTablet = useMediaQuery({query: '(min-width:768px)'});
  const isMobile = useMediaQuery({query: '(max-width:767.5px)'});
  return (
    <React.Fragment>
      {isMobile && <PartyTemplate />}
      {isTablet && <PartyTabletTemplate />}
    </React.Fragment>
  );
};

export default Party;
