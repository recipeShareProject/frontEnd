import React from 'react';
import styled from 'styled-components';
import {Black40} from 'assets/colorSet';
import {timeForToday} from 'common/presenters/timeForToday';
import defaultImg from 'assets/imgs/profile48.png';

import Wrapper from 'ui/atoms/Wrapper';
import Image from 'ui/atoms/Image';
import Typography from 'ui/atoms/Typography';
const Profile = ({src = defaultImg, nickName, location, time}) => {
  return (
    <Wrapper margin="1rem 0 0 0 " display="flex" align="center">
      <Image
        height="36px"
        width="36px"
        src={src}
        radius="50%"
        margin="0 8px 0 0"
      />
      <Wrapper display="flex" direction="column" justify="center">
        <Typography fontSize="14px">{nickName}</Typography>
        <Wrapper display="flex">
          {location && (
            <Typography fontSize="12px" margin="0 8px 0 0">
              {location}
            </Typography>
          )}
          <Typography fontSize="12px" color={Black40}>
            {timeForToday(time)}
          </Typography>
        </Wrapper>
      </Wrapper>
    </Wrapper>
  );
};

export default Profile;
