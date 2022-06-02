import React from 'react';
import Wrapper from 'ui/atoms/Wrapper';
import Typography from 'ui/atoms/Typography';
import {Colar100, Black40} from 'assets/colorSet';
import {timeForToday} from 'common/presenters/timeForToday';
const PartyMainBanner = ({category, title, address, expiredAt}) => {
  return (
    <React.Fragment>
      <Typography fontSize="12px" color={Colar100} margin="0 0 8px 0">
        {category}
      </Typography>
      <Typography fontSize="20px" fontWeight="600" margin="0 0 8px 0">
        {title}
      </Typography>
      <Wrapper display="flex" margin="0 0 1rem 0">
        <Typography fontSize="14px" margin="0 8px 16px 0">
          {address}
        </Typography>
        <Typography fontSize="14px" color={Black40}>
          {timeForToday(expiredAt, 'party')}
        </Typography>
      </Wrapper>
    </React.Fragment>
  );
};

export default PartyMainBanner;
