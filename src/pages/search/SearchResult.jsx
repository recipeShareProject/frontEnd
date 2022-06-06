import React, {useEffect} from 'react';
import {useMediaQuery} from 'react-responsive';
import SearchResultTemplate from 'ui/templates/search/SearchResultTemplate';
import SearchResultTabletTemplate from 'tablet-ui/templates/search/SearchResultTemplate';
import {useDispatch, useSelector} from 'react-redux';
import {getRecipeList} from 'redux/slices/recipeSlice';

const SearchResult = () => {
  const isTablet = useMediaQuery({query: '(min-width:768px)'});
  const isMobile = useMediaQuery({query: '(max-width:767.5px)'});

  const dispatch = useDispatch();
  const recipeList = useSelector((state) => state.recipe.recipeList);

  useEffect(() => {
    if (recipeList.length === 0) {
      dispatch(getRecipeList());
    }
  }, [dispatch, recipeList]);

  return (
    <React.Fragment>
      {isMobile && <SearchResultTemplate />}
      {isTablet && <SearchResultTabletTemplate />}
    </React.Fragment>
  );
};

export default SearchResult;
