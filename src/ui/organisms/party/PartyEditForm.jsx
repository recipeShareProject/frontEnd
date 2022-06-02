import React from 'react';

import Typography from 'ui/atoms/Typography';

const PartyEditForm = ({title, children}) => {
  return (
    <React.Fragment>
      <Typography fontSize="16px" fontWeight="600" margin="24px 0 0 0">
        {title}
      </Typography>
      {children}
    </React.Fragment>
  );
};

export default PartyEditForm;
