import React from 'react';
import TabletWrapper from 'tablet-ui/atoms/TabletWrapper';
import Wrapper from 'tablet-ui/atoms/Wrapper';
import Box from 'ui/atoms/Box';
import Divider from 'ui/atoms/Divider';
import WriteReviewInput from 'ui/organisms/WriteReviewInput';
import HeaderBar from 'ui/templates/header/HeaderBar';
import RecipeDetailImgSection from 'ui/templates/recipe/RecipeDetailImgSection';
import RecipeDetailIngredientSection from 'ui/templates/recipe/RecipeDetailIngredientSection';
import RecipeDetailProcessSection from 'ui/templates/recipe/RecipeDetailProcessSection';
import RecipeDetailReviewSection from 'ui/templates/recipe/RecipeDetailReviewSection';
import ModalPopup from 'ui/molecules/ModalPopup';

const RecipeDetailTabletTemplate = () => {
  const [modal, setModal] = React.useState(false);

  return (
    <TabletWrapper>
      <Wrapper>
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
      </Wrapper>
    </TabletWrapper>
  );
};

export default RecipeDetailTabletTemplate;
