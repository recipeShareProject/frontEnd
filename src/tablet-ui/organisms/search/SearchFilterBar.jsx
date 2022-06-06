import React, {useState} from 'react';
import Box from 'ui/atoms/Box';
import {Black10, Black20} from 'assets/colorSet';
import styled from 'styled-components';
import PlusIconInput from 'ui/organisms/PlusIconInput';
import FIlterTag from 'ui/organisms/FilterInputTag';

const SearchFilterBar = () => {
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
  };
  const onOpenExceptMenu = () => {
    setOpenExcept(!openExcept);
    setOpenInclude(false);
    setOpen(false);
  };

  const selectFilterValue = (value) => {
    setToggleCategoryValue(value);
    setOpen(false);
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
          <PlusIconInput placeholder="파마산" />
          <Box display="flex" mt={10} gap="10px">
            <FIlterTag>페퍼론치노</FIlterTag>
            <FIlterTag>돼지고기</FIlterTag>
          </Box>
        </IngredientMenu>
      )}
      <Button onClick={() => onOpenExceptMenu()}>제외할 재료</Button>
      {openExcept && (
        <IngredientMenu left="40%">
          <PlusIconInput placeholder="파마산" />
          <Box display="flex" mt={10} gap="10px">
            <FIlterTag>페퍼론치노</FIlterTag>
            <FIlterTag>돼지고기</FIlterTag>
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
  color: ${Black20};
  p {
    text-align: center;
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
