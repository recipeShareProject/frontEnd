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
          <BookmarkIcon className={classes.bookMark} />
        </StyleBookIcon>
      </ImgWrapper>
      <MainBannerTitle>레시피명</MainBannerTitle>
      <MainBannerTime>n 분</MainBannerTime>
    </MainBannerImgWrapper>
  );
};
const MainBannerImgWrapper = styled.div`
  // margin-right: 10px;
  // margin-bottom: 10px;
`;
const ImgWrapper = styled.div`
  width: ${(props) => props.width};
  height: ${(props) => (props.height ? props.height : '130px')};
  object-fit: contain;
  position: relative;
`;
const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  cursor: pointer;
`;

const MainBannerTitle = styled.p`
  margin: 0.5rem 0px;
`;
const MainBannerTime = styled.p`
  margin: 0.5rem 0px;
  font-size: 0.8rem;
`;

const StyleBookIcon = styled.div`
  cursor: pointer;
`;

export default MainBannerImg;
