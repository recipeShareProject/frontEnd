import React from 'react';
import styled from 'styled-components';
import {Black20} from 'assets/colorSet';
import {useNavigate, useLocation} from 'react-router-dom';

import LogoIcon from 'common/icons/LogoIcon';
import Wrapper from 'ui/atoms/Wrapper';
const Navi = () => {
  const location = useLocation();

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
  switch (location.pathname) {
    case '/search/filter':
    case '/recipe/write':
    case '/party/addParty':
      return '';

    default:
      return (
        <React.Fragment>
          <Wrapper display="flex" justify="space-between" align="center">
            <LogoIcon onClick={moveToHome}></LogoIcon>
            <NaviText
              onClick={moveToRecipe}
              isActive={location.pathname === '/search/result'}>
              레시피
            </NaviText>

            <NaviText
              onClick={moveToParty}
              isActive={location.pathname === '/party'}>
              파티
            </NaviText>

            <NaviText
              onClick={moveToBookmark}
              isActive={location.pathname === '/bookmark'}>
              북마크
            </NaviText>
          </Wrapper>
        </React.Fragment>
      );
  }
};
const NaviText = styled.p`
  font-size: 12px;
  margin: 0px;
  margin-left: 16px;

  ${(props) =>
    props.isActive ? {color: 'black', fontWeight: '700'} : {color: Black20}};
`;
export default Navi;
