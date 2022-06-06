import {Box} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
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
import FilterInputTag from 'ui/organisms/FilterInputTag';
import {useDispatch} from 'react-redux';
import {getFilteredRecipeList} from 'redux/slices/recipeSlice';
import {useNavigate} from 'react-router';

const SearchFilter = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm();

  const onSubmitSearchFilter = (data) => {
    const submitData = {
      order: 'cook_time',
      category: category,
      include: includeList,
      exclude: exceptList,
    };

    dispatch(getFilteredRecipeList(submitData));
    navigate('/search/result');
  };

  const [category, setCategory] = useState('한식');

  const onChangeCategoryValue = (e) => {
    setCategory(e.target.value);
  };

  const [includeTagValue, setIncludeTagValue] = useState('');
  const [includeList, setIncludeList] = useState([]);
  const addIncludeList = () => {
    setIncludeList([...includeList, includeTagValue]);
    setIncludeTagValue('');
  };

  const [exceptTagValue, setExceptTagValue] = useState('');
  const [exceptList, setExceptList] = useState([]);
  const addExceptList = () => {
    setExceptList([...exceptList, exceptTagValue]);
    setExceptTagValue('');
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

          <FilterButtonGroup>
            <input
              type="radio"
              name="한식"
              id="한식"
              value="한식"
              style={{display: 'none'}}
              {...register('category')}
              onChange={(e) => onChangeCategoryValue(e)}
            />
            <FilterButton htmlFor="한식" isChecked={category === '한식'}>
              한식
            </FilterButton>
            <input
              type="radio"
              name="중식"
              id="중식"
              value="중식"
              style={{display: 'none'}}
              {...register('category')}
              onChange={(e) => onChangeCategoryValue(e)}
            />
            <FilterButton htmlFor="중식" isChecked={category === '중식'}>
              중식
            </FilterButton>
            <input
              type="radio"
              name="일식"
              id="일식"
              value="일식"
              style={{display: 'none'}}
              {...register('category')}
              onChange={(e) => onChangeCategoryValue(e)}
            />
            <FilterButton htmlFor="일식" isChecked={category === '일식'}>
              일식
            </FilterButton>
            <input
              type="radio"
              name="양식"
              id="양식"
              value="양식"
              style={{display: 'none'}}
              {...register('category')}
              onChange={(e) => onChangeCategoryValue(e)}
            />
            <FilterButton htmlFor="양식" isChecked={category === '양식'}>
              양식
            </FilterButton>
            <input
              type="radio"
              name="간식"
              id="간식"
              value="간식"
              style={{display: 'none'}}
              {...register('category')}
              onChange={(e) => onChangeCategoryValue(e)}
            />
            <FilterButton htmlFor="간식" isChecked={category === '간식'}>
              간식
            </FilterButton>
          </FilterButtonGroup>
          <Box mt={5}>
            <FilterTitle>포함할 재료</FilterTitle>
            <FilterInputWrapper>
              <FilterInput
                placeholder="재료를 추가해주세요"
                value={includeTagValue}
                onChange={(e) =>
                  setIncludeTagValue(e.target.value)
                }></FilterInput>
              <AddIcon onClick={() => addIncludeList()} />
            </FilterInputWrapper>

            <FilterInputTagWrapper>
              {includeList.map((p, idx) => {
                return <FilterInputTag key={idx}>{p}</FilterInputTag>;
              })}
            </FilterInputTagWrapper>
          </Box>
          <Box mt={5}>
            <FilterTitle>제외할 재료</FilterTitle>
            <FilterInputWrapper>
              <FilterInput
                placeholder="재료를 추가해주세요"
                value={exceptTagValue}
                onChange={(e) =>
                  setExceptTagValue(e.target.value)
                }></FilterInput>
              <AddIcon onClick={() => addExceptList()} />
            </FilterInputWrapper>

            <FilterInputTagWrapper>
              {exceptList.map((p, idx) => {
                return <FilterInputTag key={idx}>{p}</FilterInputTag>;
              })}
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
// const FilterInputTag = styled.div`
//   color: ${Colar100};
//   border: 2px solid ${Black5};
//   display: flex;
//   align-items: center;
//   width: fit-content;
//   padding: 2px;
//   font-size: 0.8rem;
//   font-weight: 600;
//   p {
//     margin: 0;
//     margin: 0px 10px;
//   }
// `;
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
