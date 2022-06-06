import styled from 'styled-components';

const RecipeImg = ({width, height, borderRadius}) => {
  return (
    //Todo : atom으로 변경
    <MainBannerImgWrapper>
      <ImgWrapper width={width} height={height}>
        <Img
          borderRadius={borderRadius}
          src="https://i.pinimg.com/564x/b9/cd/cc/b9cdccde10d5a581874f58bb7e914962.jpg"
          alt="음식사진"
        />
      </ImgWrapper>
    </MainBannerImgWrapper>
  );
};

const MainBannerImgWrapper = styled.div`
  margin-right: 10px;
  margin-bottom: 10px;
`;
const ImgWrapper = styled.div`
  width: ${(props) => props.width};
  height: ${(props) => (props.height ? props.height : '120px')};
  object-fit: contain;
  position: relative;
`;
const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: ${(props) =>
    props.borderRadius ? props.borderRadius : '8px'};
`;

export default RecipeImg;
