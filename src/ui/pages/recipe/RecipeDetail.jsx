import React from 'react';
import {Box} from '@mui/material';
import styled from 'styled-components';
import ModalPopup from 'ui/molecules/ModalPopup';
import HeaderBar from 'ui/templates/header/HeaderBar';
import RecipeDetailImgSection from 'ui/templates/recipe/RecipeDetailImgSection';
import RecipeDetailIngredientSection from 'ui/templates/recipe/RecipeDetailIngredientSection';
import Divider from 'ui/atoms/Divider';
import RecipeDetailReviewSection from 'ui/templates/recipe/RecipeDetailReviewSection';
import RecipeDetailProcessSection from 'ui/templates/recipe/RecipeDetailProcessSection';

const ReciepeDetail = () => {
  const [modal, setModal] = React.useState(false);
  return (
    <div>
      <Box>
        <HeaderBar type="recipe" />
        <RecipeDetailImgSection />
        <Divider />
        <RecipeDetailIngredientSection />
        <Divider />
        <RecipeDetailProcessSection />
        <Divider />
        <RecipeDetailReviewSection />
      </Box>
      {modal && (
        <ModalPopup
          isOn={true}
          content="레시피명에 대한 닉네임님의 평가가 궁금해요"
          closeEvent={setModal}
          yesEvent={() => {}}></ModalPopup>
      )}
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
