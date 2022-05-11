import React from 'react';
import styled from 'styled-components';
import {useNavigate} from 'react-router-dom';

import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';

import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import FastfoodRoundedIcon from '@mui/icons-material/FastfoodRounded';
import ChatBubbleRoundedIcon from '@mui/icons-material/ChatBubbleRounded';
import BookmarkRoundedIcon from '@mui/icons-material/BookmarkRounded';

function Navigation() {
  const [value, setValue] = React.useState(0);
  const navigate = useNavigate();
  const onClickHome = () => {
    navigate('/');
  };
  const onClickRecipe = () => {
    navigate('/recipe/detail');
  };
  const onClickParty = () => {
    navigate('/party');
  };
  const onClickBookmark = () => {
    navigate('/bookmark');
  };

  return (
    <Box>
      <StyleNavi
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}>
        <BottomNavigationAction
          onClick={onClickHome}
          label="홈"
          icon={<HomeRoundedIcon />}
        />
        <BottomNavigationAction
          onClick={onClickRecipe}
          label="레시피"
          icon={<FastfoodRoundedIcon />}
        />
        <BottomNavigationAction
          onClick={onClickParty}
          label="파티"
          icon={<ChatBubbleRoundedIcon />}
        />
        <BottomNavigationAction
          onClick={onClickBookmark}
          label="북마크"
          icon={<BookmarkRoundedIcon />}
        />
      </StyleNavi>
    </Box>
  );
}

const StyleNavi = styled(BottomNavigation)`
  width: 100%;
  border: 1px solid green;
  height: 60px;
  background-color: white;

  display: flex;
  justify-content: space-around;
  align-items: center;

  position: fixed;
  bottom: 0;
  left: 0;
`;

export default Navigation;
