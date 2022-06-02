import React from 'react';

import Wrapper from 'ui/atoms/Wrapper';
import Typography from 'ui/atoms/Typography';

const EditForm = ({title, mt, children}) => {
  return (
    <React.Fragment>
      <Wrapper mt={mt}>
        <Typography fontSize="16px" fontWeight="600" margin="24px 0 0 0">
          {title}
        </Typography>
        {children}
      </Wrapper>
    </React.Fragment>
  );
};

export default EditForm;
