import React from 'react';
import Box from 'ui/atoms/Box';
import Image from 'ui/atoms/Image';
import profile from 'assets/imgs/profile48.png';
import Typography from 'ui/atoms/Typography';
import {Black40} from 'assets/colorSet';

const ReviewProfileImg = () => {
  return (
    <Box margin="20px 0px">
      <Box display="flex">
        <Image height="36px" width="36px" src={profile} alt="profile" />
        <Box margin="0px 0px 0px 1rem">
          <Typography fontSize="14px">닉네임</Typography>
          <Box display="flex" mt={5}>
            <Typography fontSize="12px" fontWeight="bold">
              괜찮아요
            </Typography>
            <Typography
              fontSize="12px"
              color={Black40}
              margin="0px 0px 0px 0.5rem">
              n분전
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ReviewProfileImg;
