import React from 'react';
import styled from 'styled-components';

const RecipeTab = () => {
  return (
    <>
      <StyleGrid>
        <StyledCard>
          <StyledImg></StyledImg>
          <p>레시피명</p>
          <p>n분</p>
        </StyledCard>
        <StyledCard>
          <StyledImg></StyledImg>
          <p>레시피명</p>
          <p>n분</p>
        </StyledCard>
        <StyledCard>
          <StyledImg></StyledImg>
          <p>레시피명</p>
          <p>n분</p>
        </StyledCard>
        <StyledCard>
          <StyledImg></StyledImg>
          <p>레시피명</p>
          <p>n분</p>
        </StyledCard>
      </StyleGrid>
    </>
  );
};

const StyleGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  & > div:nth-child(odd) {
    padding-right: 0.5rem;
  }
`;
const StyledCard = styled.div``;

const StyledImg = styled.div`
  background-color: lightgray;
  width: 159px;
  height: 121px;
`;
export default RecipeTab;
