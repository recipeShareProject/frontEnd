import {Box} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import CloseIcon from '@mui/icons-material/Close';
import styled from 'styled-components';
import {
  Beige60,
  Black10,
  Black100,
  Black20,
  Black5,
  Colar100,
} from 'assets/colorSet';
import {useForm} from 'react-hook-form';
import {useState} from 'react';
import HeaderBar from 'ui/templates/header/HeaderBar';
import Wrapper from 'tablet-ui/atoms/Wrapper';

const SearchFilter = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: {errors},
  } = useForm();

  const onSubmitSearchFilter = (data) => {
    console.log(data);
    console.log(category);
  };

  const [category, setCategory] = useState('korea');

  const onChangeCategoryValue = (e) => {
    setCategory(e.target.value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmitSearchFilter)}>
        <HeaderBar />
        <Box padding="1rem">
          <Wrapper padding="72px 0 0 0">
            <Title>필터 설정하기</Title>
            <FilterTitle>카테고리</FilterTitle>
          </Wrapper>
          {/* todo : 이거를 어떻게 공통화 하지? */}
          <FilterButtonGroup>
            <input
              type="radio"
              name="korea"
              id="korea"
              value="korea"
              style={{display: 'none'}}
              {...register('category')}
              onChange={(e) => onChangeCategoryValue(e)}
            />
            <FilterButton htmlFor="korea" isChecked={category === 'korea'}>
              한식
            </FilterButton>
            <input
              type="radio"
              name="china"
              id="china"
              value="china"
              style={{display: 'none'}}
              {...register('category')}
              onChange={(e) => onChangeCategoryValue(e)}
            />
            <FilterButton htmlFor="china" isChecked={category === 'china'}>
              중식
            </FilterButton>
            <input
              type="radio"
              name="japan"
              id="japan"
              value="japan"
              style={{display: 'none'}}
              {...register('category')}
              onChange={(e) => onChangeCategoryValue(e)}
            />
            <FilterButton htmlFor="japan" isChecked={category === 'japan'}>
              일식
            </FilterButton>
            <input
              type="radio"
              name="america"
              id="america"
              value="america"
              style={{display: 'none'}}
              {...register('category')}
              onChange={(e) => onChangeCategoryValue(e)}
            />
            <FilterButton htmlFor="america" isChecked={category === 'america'}>
              양식
            </FilterButton>
            <input
              type="radio"
              name="snack"
              id="snack"
              value="snack"
              style={{display: 'none'}}
              {...register('category')}
              onChange={(e) => onChangeCategoryValue(e)}
            />
            <FilterButton htmlFor="snack" isChecked={category === 'snack'}>
              간식
            </FilterButton>
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
                <p>페퍼론치노</p>
                <CloseIcon fontSize="small" />
              </FilterInputTag>
              <FilterInputTag>
                <p>돼지고기</p>
                <CloseIcon fontSize="small" />
              </FilterInputTag>
            </FilterInputTagWrapper>
          </Box>
          <Box mt={5}>
            <FilterTitle>제외할 재료</FilterTitle>
            <FilterInputWrapper>
              <FilterInput placeholder="재료를 추가해주세요"></FilterInput>
              <AddIcon />
            </FilterInputWrapper>

            <FilterInputTagWrapper>
              {/* Todo :atom으로 빼기*/}
              <FilterInputTag>
                <p>페퍼론치노</p>
                <CloseIcon fontSize="small" />
              </FilterInputTag>
              <FilterInputTag>
                <p>돼지고기</p>
                <CloseIcon fontSize="small" />
              </FilterInputTag>
            </FilterInputTagWrapper>
          </Box>
        </Box>
        <SubmitButtonWrapper>
          <SubmitButton reset>초기화</SubmitButton>
          <SubmitButton type="submit">적용하기</SubmitButton>
        </SubmitButtonWrapper>
      </form>
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
const FilterButton = styled.label`
  height: 48px;
  width: 100%;
  border: none;
  border-radius: 4px;
  border: 1px solid ${(props) => (props.isChecked ? Colar100 : 'none')};
  background: white;
  color: ${(props) => (props.isChecked ? Colar100 : Black20)};
  background: ${(props) => (props.isChecked ? 'white' : Black5)};
  font-weight: bold;
  text-align: center;
  align-items: center;
  display: flex;
  justify-content: center;
  font-size: 14px;
`;

const FilterInputWrapper = styled.div`
  width: 100%;
  height: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0px 10px;
  box-sizing: border-box;
  border-bottom: 2px solid ${Black10};
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
  color: ${Colar100};
  border: 2px solid ${Black5};
  display: flex;
  align-items: center;
  width: fit-content;
  padding: 2px;
  font-size: 0.8rem;
  font-weight: 600;
  p {
    margin: 0;
    margin: 0px 10px;
  }
`;
const SubmitButtonWrapper = styled.div`
  position: fixed;
  bottom: 0px;
  background: pink;
  width: 100%;
  height: 60px;
  display: flex;
`;
const SubmitButton = styled.button`
  width: 100%;
  border: none;
  background: ${(props) => (props.reset ? Beige60 : Colar100)};
  color: ${(props) => (props.reset ? Black100 : 'white')};
  font-weight: 600;
`;

export default SearchFilter;
