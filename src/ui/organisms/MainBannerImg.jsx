import React from 'react';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import styled from 'styled-components';
import {makeStyles} from '@mui/styles';
import {useNavigate, useLocation} from 'react-router-dom';
import {Box} from '@mui/material';
import {Black100, Black40} from 'assets/colorSet';
import Floating from 'ui/atoms/FloatingButton';

const useStyles = makeStyles({
  bookMark: {
    position: 'absolute',
    bottom: '5px',
    right: '5px',
    color: 'white',
  },
});

const RecipeCard = ({width, height}) => {
  const classes = useStyles();
  const navigate = useNavigate();
  const {pathname} = useLocation();

  return (
    <MainBannerImgWrapper>
      <ImgWrapper width={width} height={height}>
        <Img
          src="https://i.pinimg.com/564x/b9/cd/cc/b9cdccde10d5a581874f58bb7e914962.jpg"
          alt="음식사진"
          onClick={() => {
            navigate('/recipe/detail');
          }}
        />
        <StyleBookIcon
          onClick={() => {
            navigate('/bookmark');
          }}>
          <BookmarkIcon fontSize="small" className={classes.bookMark} />
        </StyleBookIcon>
      </ImgWrapper>
      <MainBannerTitle>레시피명</MainBannerTitle>
      <Box sx={{display: 'flex'}}>
        <MainBannerTime color={Black100}>n 분</MainBannerTime>
        {pathname === '/search/result' && (
          <MainBannerTime color={Black40} margin="0px 0px 0px 10px">
            100% 일치
          </MainBannerTime>
        )}
      </Box>
    </MainBannerImgWrapper>
  );
};
const MainBannerImgWrapper = styled.div``;
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
