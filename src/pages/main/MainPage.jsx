import React, {useEffect} from 'react';

import {useMediaQuery} from 'react-responsive';
import MainTemplate from 'ui/templates/main';
import MainTablet from 'tablet-ui/templates/main/MainTabletTemplate';
import {useDispatch} from 'react-redux';
import {getRecipeList} from 'redux/slices/recipeSlice';

const MainPage = () => {
  const isPC = useMediaQuery({query: '(min-width:992px)'});
  const isTablet = useMediaQuery({query: '(min-width:768px)'});
  const isMobile = useMediaQuery({query: '(max-width:767.5px)'});

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRecipeList());
  });
  return (
    <React.Fragment>
      {isMobile && <MainTemplate />}
      {isTablet && <MainTablet />}
    </React.Fragment>
  );
};

export default MainPage;
