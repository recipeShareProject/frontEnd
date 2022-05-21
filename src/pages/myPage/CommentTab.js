import {Box} from '@mui/material';
import {Black40} from 'assets/colorSet';
import PartyPost from 'components/party/PartyPost';
import React from 'react';
import {Typography} from './My';

const CommentTab = () => {
  return (
    <Box mt={4}>
      <Typography color={Black40} fontSize="12px">
        2022년 5월 21일
      </Typography>
      <PartyPost />
      <PartyPost />

      <Typography color={Black40} fontSize="12px">
        2022년 5월 20일
      </Typography>
      <PartyPost />
      <PartyPost />
      <PartyPost />
    </Box>
  );
};

export default CommentTab;
//  disabled: {
//    false;
//  }
