import React from 'react';
import styled from 'styled-components';
import Box from 'ui/atoms/Box';
import RecipeImg from 'ui/organisms/RecipeImg';
import Typography from 'ui/atoms/Typography';
import {Black40, Colar100} from 'assets/colorSet';

const RecipeDetailImgSection = () => {
  const [modal, setModal] = React.useState(false);
  return (
    <Box padding="0px 16px">
      <Typography fontSize="1.4rem" fontWeight="bold" margin="1rem 0px 0px 0px">
        김치찌개
      </Typography>

      <Box>
        <Typography fontSize="14px" margin="10px 0px">
          n분 한식
        </Typography>
        <Box display="flex" justifyContent="space-between" margin="10px 0px">
          <Typography fontSize="12px" color={Colar100}>
            닉네임
          </Typography>
          <Typography fontSize="12px" color={Black40}>
            n개 리뷰 보기
          </Typography>
        </Box>
      </Box>
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
    </Box>
  );
};

export default RecipeDetailImgSection;
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
