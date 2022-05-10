import {Box} from '@mui/material';
import RecipeImg from 'components/recipe/RecipeImg';
import RecipeReview from 'components/recipe/RecipeReview';
import styled from 'styled-components';

const ReciepeDetail = () => {
  return (
    <div>
      <Box>
        <Title>김치찌개</Title>
        <TitleBox>
          <p>n분 한식</p>
          <p>n개 리뷰 보기</p>
        </TitleBox>
        <RecipeImgGroupWrapper>
          {/* TODO : 이미지 슬라이드로 바꾸기 */}
          <RecipeImgGroup>
            <RecipeImg width="320px" height="250px" />
            <RecipeImg width="320px" height="250px" />
            <RecipeImg width="320px" height="250px" />
            <RecipeImg width="320px" height="250px" />
            <RecipeImg width="320px" height="250px" />
            <RecipeImg width="320px" height="250px" />
          </RecipeImgGroup>
        </RecipeImgGroupWrapper>
        <Box mt={4}>
          <Box sx={{display: 'flex'}}>
            <SubTitle>재료</SubTitle>
            <p>n인분</p>
          </Box>
          <Box sx={{display: 'flex'}}>
            <Box sx={{width: '50%', height: '50px'}}>재료명</Box>
            <div>n개</div>
          </Box>
          <Box sx={{display: 'flex'}}>
            <Box sx={{width: '50%', height: '50px'}}>재료명</Box>
            <div>n스푼</div>
          </Box>
          <Box sx={{display: 'flex'}}>
            <Box sx={{width: '50%', height: '50px'}}>재료명</Box>
            <div>n조각</div>
          </Box>
        </Box>
        <Box mt={4}>
          <SubTitle>재료</SubTitle>
          <p>
            숟가락을 이용해 전복 살과 껍질을 분리하고 내장도 조심스럽게 떼어
            내세요. 내장은 버리지 말고 죽이나 찌개 등에 넣어 드셔도 좋아요.
          </p>
          <RecipeImg width="100%" height="250px" />
          <p>
            숟가락을 이용해 전복 살과 껍질을 분리하고 내장도 조심스럽게 떼어
            내세요. 내장은 버리지 말고 죽이나 찌개 등에 넣어 드셔도 좋아요.
          </p>
          <RecipeImg width="100%" height="250px" />
          <p>
            숟가락을 이용해 전복 살과 껍질을 분리하고 내장도 조심스럽게 떼어
            내세요. 내장은 버리지 말고 죽이나 찌개 등에 넣어 드셔도 좋아요.
          </p>
          <RecipeImg width="100%" height="250px" />
        </Box>
        <Box mt={4}>
          <Box sx={{display: 'flex'}}>
            <SubTitle>리뷰</SubTitle>
            <p>n개</p>
          </Box>
          <RecipeReview />
          <RecipeReview />
          <RecipeReview />
          <RecipeReview />
        </Box>
      </Box>
    </div>
  );
};
export default ReciepeDetail;
const Title = styled.p`
  font-size: 1.4rem;
  font-weight: bold;
  margin-top: 1rem;
  margin-bottom: 0;
`;
const TitleBox = styled.div`
  font-size: 0.8rem;
  display: flex;
  justify-content: space-between;
`;
export const RecipeImgGroupWrapper = styled.div`
  width: 100%;
  overflow: scroll;
`;
export const RecipeImgGroup = styled.div`
  display: flex;
`;

const SubTitle = styled.p`
  font-weight: bold;
  margin-right: 1rem;
`;
