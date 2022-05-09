import {Box, Button} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import CloseIcon from '@mui/icons-material/Close';
import styled from 'styled-components';

const SearchFilter = () => {
  return (
    <div>
      <Box>
        {/* Todo : 공통으로 빼기 */}
        <Title>필터 설정하기</Title>
        <FilterTitle>카테고리</FilterTitle>
      </Box>
      <FilterButtonGroup>
        <FilterButton background="#5C5C5C" color="white">
          한식
        </FilterButton>
        <FilterButton background="#F3F3F3">중식</FilterButton>
        <FilterButton background="#F3F3F3">일식</FilterButton>
        <FilterButton background="#F3F3F3">양식</FilterButton>
        <FilterButton background="#F3F3F3">간식</FilterButton>
      </FilterButtonGroup>
      <Box mt={5}>
        <FilterTitle>포함할 재료</FilterTitle>
        <FilterInputWrapper>
          <FilterInput placeholder="재료를 추가해주세요"></FilterInput>
          <AddIcon />
        </FilterInputWrapper>

        <FilterInputTagWrapper>
          {/* Todo : tag공통으로 빼기 */}
          <FilterInputTag>
            <p>스팸</p>
            <CloseIcon fontSize="small" />
          </FilterInputTag>
          <FilterInputTag>
            <p>돼지고기</p>
            <CloseIcon fontSize="small" />
          </FilterInputTag>
          <FilterInputTag>
            <p>돼지고기</p>
            <CloseIcon fontSize="small" />
          </FilterInputTag>
          <FilterInputTag>
            <p>스팸</p>
            <CloseIcon fontSize="small" />
          </FilterInputTag>
        </FilterInputTagWrapper>
      </Box>
      <Box mt={5}>
        <FilterTitle>제외할 재료</FilterTitle>
        <FilterInputWrapper>
          <FilterInput placeholder="설탕"></FilterInput>
          <AddIcon />
        </FilterInputWrapper>
      </Box>
    </div>
  );
};

const Title = styled.p`
  font-size: 1.4rem;
  font-weight: bold;
`;
const FilterTitle = styled.p`
  font-weight: bold;
`;
const FilterButtonGroup = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
`;
const FilterButton = styled.button`
  height: 48px;
  width: 100%;
  border: none;
  background: ${(props) => props.background};
  margin: 10px 10px 5px 0px;
  color: ${(props) => (props.color ? props.color : 'black')};
`;

const FilterInputWrapper = styled.div`
  width: 100%;
  height: 48px;
  background: #e5e5e5;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0px 10px;
  box-sizing: border-box;
`;

const FilterInput = styled.input`
  width: 100%;
  border: none;
  background: none;
`;

const FilterInputTagWrapper = styled.div`
  margin: 1.2rem 0px;
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
`;
const FilterInputTag = styled.div`
  color: white;
  background: #5c5c5c;
  display: flex;
  align-items: center;
  width: fit-content;
  padding: 5px;
  font-size: 0.8rem;
  p {
    margin: 0;
    margin: 0px 10px;
  }
`;

export default SearchFilter;
