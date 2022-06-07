import React from 'react';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import styled from 'styled-components';
import {makeStyles} from '@mui/styles';
import {useNavigate, useLocation} from 'react-router-dom';
import {Box} from '@mui/material';
import {Black100, Black40} from 'assets/colorSet';
import {foodImgs} from 'common/presenters/foodImgs';

import recipeApi from 'api/recipeApi';
import {chnageBookmarkStatus} from 'redux/slices/recipeSlice';
import {useDispatch} from 'react-redux';
const useStyles = makeStyles({
  bookMark: {
    position: 'absolute',
    bottom: '5px',
    right: '5px',
  },
});

const RecipeCard = ({
  width,
  height,
  id,
  title = '레시피명',
  cookTime = 'n 분',
  isBookmark,
}) => {
  const classes = useStyles();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {pathname} = useLocation();
  const [bookmark, setBookmark] = React.useState(isBookmark);

  const image = foodImgs[id % 11];

  return (
    <MainBannerImgWrapper width={width} height={height}>
      <ImgWrapper width={width} height={height}>
        <Img
          src={image}
          alt="음식사진"
          onClick={() => {
            navigate('/recipe/detail');
          }}
        />
        <StyleBookIcon
          onClick={async () => {
            dispatch(chnageBookmarkStatus(id));
            setBookmark(!bookmark);
          }}>
          <BookmarkIcon
            fontSize="small"
            className={classes.bookMark}
            sx={{color: bookmark ? 'black' : 'white'}}
          />
        </StyleBookIcon>
      </ImgWrapper>
      <MainBannerTitle>{title}</MainBannerTitle>
      <Box sx={{display: 'flex'}}>
        <MainBannerTime color={Black100}>{cookTime}</MainBannerTime>
        {pathname === '/search/result' && (
          <MainBannerTime color={Black40} margin="0px 0px 0px 10px">
            100% 일치
          </MainBannerTime>
        )}
      </Box>
    </MainBannerImgWrapper>
  );
};
const MainBannerImgWrapper = styled.div`
  width: ${(props) => props.width};
`;
const ImgWrapper = styled.div`
  width: ${(props) => props.width};
  height: ${(props) => (props.height ? props.height : '130px')};
  object-fit: contain;
  position: relative;
  border-radius: 4px;
`;
const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  cursor: pointer;
  border-radius: 4px;
`;

const MainBannerTitle = styled.p`
  margin: 0.5rem 0px 0.2rem 0px;
  font-size: 14px;
  font-weight: bold;
`;
const MainBannerTime = styled.p`
  margin: 0.5rem 0px;
  font-size: 12px;
  color: ${(props) => props.color};
  margin: ${(props) => (props.margin ? props.margin : '0px')};
`;

const StyleBookIcon = styled.div`
  cursor: pointer;
`;

export default RecipeCard;
