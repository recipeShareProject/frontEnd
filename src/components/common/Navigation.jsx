import React, {useState} from 'react';
import styled from 'styled-components';
import {useNavigate} from 'react-router-dom';
import {useLocation} from 'react-router-dom';
import Box from '@mui/material/Box';
import HomeIcon from 'common/icons/HomeIcon';
import RecipeIcon from 'common/icons/RecipeIcon';
import PartyIcon from 'common/icons/PartyIcon';
import BookMarkIcon from 'common/icons/BookMarkIcon';
import {Black20, Colar100} from 'assets/colorSet';
import HomeColorIcon from 'common/icons/HomeColorIcon';
import RecipeColorIcon from 'common/icons/RecipeColorIcon';
import PartyColorIcon from 'common/icons/PartyColorIcon';
import BookMarkColorIcon from 'common/icons/BookMarkColorIcon';

const Navigation = () => {
  const [value, setValue] = useState(0);
  const location = useLocation();
  console.log(location);

  const navigate = useNavigate();

  const moveToHome = () => {
    navigate('/');
  };
  const moveToRecipe = () => {
    navigate('/search/result');
  };
  const moveToParty = () => {
    navigate('/party');
  };
  const moveToBookmark = () => {
    navigate('/bookmark');
  };

  return (
    <Box>
      <StyleNavi
      // showLabels
      // value={value}
      // onChange={(event, newValue) => {
      // setValue(newValue);
      // }}
      >
        <NaviBox
          onClick={() => {
            moveToHome();
          }}>
          {location.pathname === '/' ? <HomeColorIcon /> : <HomeIcon />}

          <NaviText isActive={location.pathname === '/'}>홈</NaviText>
        </NaviBox>
        <NaviBox
          onClick={() => {
            moveToRecipe();
          }}>
          {location.pathname === '/search/result' ? (
            <RecipeColorIcon />
          ) : (
            <RecipeIcon />
          )}
          <NaviText isActive={location.pathname === '/search/result'}>
            레시피
          </NaviText>
        </NaviBox>
        <NaviBox
          onClick={() => {
            moveToParty();
          }}>
          {location.pathname === '/party' ? (
            <PartyColorIcon />
          ) : (
            <PartyIcon></PartyIcon>
          )}

          <NaviText isActive={location.pathname === '/party'}>파티</NaviText>
        </NaviBox>
        <NaviBox
          onClick={() => {
            moveToBookmark();
          }}>
          {location.pathname === '/bookmark' ? (
            <BookMarkColorIcon />
          ) : (
            <BookMarkIcon />
          )}

          <NaviText isActive={location.pathname === '/bookmark'}>
            북마크
          </NaviText>
        </NaviBox>
      </StyleNavi>
    </Box>
  );
};

const StyleNavi = styled.div`
  width: 100%;
  height: 60px;
  background-color: white;

  display: flex;
  justify-content: space-around;
  align-items: center;

  position: fixed;
  bottom: 0;
  left: 0;
`;

const NaviBox = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  margin: 0px 20px;
`;
const NaviText = styled.p`
  font-size: 12px;
  color: ${(props) => (props.isActive ? Colar100 : Black20)};
  margin: 0px;
  margin-top: 5px;
`;

export default Navigation;
