import React from 'react';
import styled from 'styled-components';
import {Black20} from 'assets/colorSet';
import picture from 'assets/imgs/picture.png';
import Box from 'ui/atoms/Box';
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';
import {useState} from 'react';
import RecipeImgSlider from './RecipeImgSlider';

const WriteReviewInput = ({placeholder, _ref, handleTag}) => {
  const [isInputFocus, setIsInputFocus] = useState(false);

  const onFocus = () => {
    setIsInputFocus(true);
  };
  return (
    <Box
      position="fixed"
      bottom="0px"
      left="0px"
      background="white"
      width="100%">
      <InputWrapper>
        <img alt="myinfo" src={picture} />
        <StyledInput
          ref={_ref}
          placeholder={placeholder}
          onKeyPress={handleTag}
          onFocus={onFocus}
          onBlur={() => setIsInputFocus(false)}
        />
        <ArrowForwardIosRoundedIcon sx={{color: '#D1D0CF'}} />
      </InputWrapper>
      {isInputFocus && <RecipeImgSlider />}
    </Box>
  );
};
const InputWrapper = styled.div`
  width: 100%;
  height: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0px 10px;
  box-sizing: border-box;
  border-bottom: 1px solid ${Black20};
  margin-top: 16px;
`;

const StyledInput = styled.input`
  width: 100%;
  border: none;
  background: none;
  margin-left: 10px;
`;
export default WriteReviewInput;
