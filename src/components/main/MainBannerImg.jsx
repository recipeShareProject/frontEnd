import React from 'react';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import styled from 'styled-components';
import {makeStyles} from '@mui/styles';
import {useNavigate} from 'react-router-dom';

const useStyles = makeStyles({
  bookMark: {
    position: 'absolute',
    bottom: '5px',
    right: '5px',
    color: 'white',
  },
});

const MainBannerImg = ({width, height}) => {
  const classes = useStyles();
  const navigate = useNavigate();
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
      <MainBannerTime>n 분</MainBannerTime>
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
  margin: 0.5rem 0px;
  font-size: 14px;
  font-weight: bold;
`;
const MainBannerTime = styled.p`
  margin: 0.5rem 0px;
  font-size: 12px;
`;

const StyleBookIcon = styled.div`
  cursor: pointer;
`;

export default MainBannerImg;
