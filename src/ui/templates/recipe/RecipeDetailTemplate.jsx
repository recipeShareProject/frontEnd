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
import WriteReviewInput from 'ui/organisms/WriteReviewInput';

const RecipeDetailTemplate = () => {
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
        <WriteReviewInput placeholder="리뷰를 남겨보세요" />
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

export default RecipeDetailTemplate;
export const RecipeImgGroupWrapper = styled.div`
  width: 100%;
  overflow: scroll;
`;
export const RecipeImgGroup = styled.div`
  display: flex;
`;
