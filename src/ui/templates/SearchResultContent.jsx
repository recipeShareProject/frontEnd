import Box from 'ui/atoms/Box';
import Grid from 'ui/atoms/Grid';
import MainBannerImg from 'tablet-ui/organisms/MainBannerImg';
import {useSelector} from 'react-redux';

const SearchResultContent = () => {
  const recipeList = useSelector((state) => state.recipe.recipeList);

  return (
    <Box padding="0px 16px">
      <Grid>
        {recipeList.map((p) => {
          return (
            <MainBannerImg
              width="100%"
              key={p.id}
              id={p.id}
              cookTime={p.cookTime}
              isBookmark={p.isBookmark}
              title={p.title}
            />
          );
        })}
      </Grid>
    </Box>
  );
};

export default SearchResultContent;
