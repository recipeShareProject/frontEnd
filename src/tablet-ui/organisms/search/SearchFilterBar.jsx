import React, {useState} from 'react';
import Box from 'ui/atoms/Box';
import {Black10, Black20, Colar100} from 'assets/colorSet';
import styled from 'styled-components';
import {useDispatch} from 'react-redux';
import {getFilteredRecipeList} from 'redux/slices/recipeSlice';
import {FilterInputWrapper} from 'pages/search/SearchFilter';
import {FilterInput} from 'pages/search/SearchFilter';
import FilterInputTag from 'ui/organisms/FilterInputTag';
import AddIcon from '@mui/icons-material/Add';

const SearchFilterBar = () => {
  const dispatch = useDispatch();
  const [open, setOpen] = useState();
  const [openInclude, setOpenInclude] = useState();
  const [openExcept, setOpenExcept] = useState();
  const [toggleCategoryValue, setToggleCategoryValue] = useState('카테고리');

  const onOpenCategoryFilterMenu = () => {
    setOpen(!open);
    setOpenInclude(false);
    setOpenExcept(false);
  };
  const onOpenIncludeMenu = () => {
    setOpenInclude(!openInclude);
    setOpenExcept(false);
    setOpen(false);
    if (openInclude) {
      const submitData = {
        order: 'cook_time',
        category: toggleCategoryValue,
        include: includeList,
        exclude: [],
      };
      dispatch(getFilteredRecipeList(submitData));
    }
  };
  const onOpenExceptMenu = () => {
    setOpenExcept(!openExcept);
    setOpenInclude(false);
    setOpen(false);
    if (openExcept) {
      const submitData = {
        order: 'cook_time',
        category: toggleCategoryValue,
        include: includeList,
        exclude: exceptList,
      };
      dispatch(getFilteredRecipeList(submitData));
    }
  };

  const selectFilterValue = (value) => {
    setToggleCategoryValue(value);
    setOpen(false);
    const submitData = {
      order: 'cook_time',
      category: value,
      include: [],
      exclude: [],
    };
    dispatch(getFilteredRecipeList(submitData));
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
    <Box display="flex" justifyContent="center" gap="3rem" position="relative">
      <Button
        onClick={() => {
          onOpenCategoryFilterMenu();
        }}>
        {toggleCategoryValue}
      </Button>
      {open && (
        <ToggleMenu>
          <p onClick={() => selectFilterValue('한식')}>한식</p>
          <p onClick={() => selectFilterValue('중식')}>중식</p>
          <p onClick={() => selectFilterValue('일식')}>일식</p>
          <p onClick={() => selectFilterValue('일식')}>양식</p>
          <p onClick={() => selectFilterValue('간식')}>간식</p>
        </ToggleMenu>
      )}
      <Button onClick={() => onOpenIncludeMenu()}>포함할 재료</Button>
      {openInclude && (
        <IngredientMenu left="25%">
          <FilterInputWrapper>
            <FilterInput
              placeholder="재료를 추가해주세요"
              value={includeTagValue}
              onChange={(e) =>
                setIncludeTagValue(e.target.value)
              }></FilterInput>
            <AddIcon onClick={() => addIncludeList()} />
          </FilterInputWrapper>
          <Box display="flex" mt={10} gap="10px">
            {includeList.map((p, idx) => {
              return <FilterInputTag key={idx}>{p}</FilterInputTag>;
            })}
          </Box>
        </IngredientMenu>
      )}
      <Button onClick={() => onOpenExceptMenu()}>제외할 재료</Button>
      {openExcept && (
        <IngredientMenu left="40%">
          <FilterInputWrapper>
            <FilterInput
              placeholder="재료를 추가해주세요"
              value={exceptTagValue}
              onChange={(e) => setExceptTagValue(e.target.value)}></FilterInput>
            <AddIcon onClick={() => addExceptList()} />
          </FilterInputWrapper>
          <Box display="flex" mt={10} gap="10px">
            {exceptList.map((p, idx) => {
              return <FilterInputTag key={idx}>{p}</FilterInputTag>;
            })}
          </Box>
        </IngredientMenu>
      )}
    </Box>
  );
};

export default SearchFilterBar;
const Button = styled.button`
  border: none;
  background: none;
  font-size: 14px;
`;
export const ToggleMenu = styled.div`
  background: white;
  position: absolute;
  z-index: 100;
  top: 200%;
  left: 25%;
  padding: 10px 50px;
  border: 1px solid ${Black10};
  border-radius: 4px;
  font-size: 14px;
  cursor: pointer;
  color: ${Black20};
  p {
    text-align: center;
    &:hover {
      color: ${Colar100};
      text-decoration: underline;
    }
  }
`;
const IngredientMenu = styled.div`
  background: white;
  position: absolute;
  z-index: 100;
  top: 200%;
  left: ${(props) => props.left};
  width: 320px;
  height: 120px;
  border: 1px solid ${Black10};
  border-radius: 4px;
  font-size: 14px;
  padding: 0px 1rem;
`;
