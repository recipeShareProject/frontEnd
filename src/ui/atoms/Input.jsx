import React from 'react';
import styled from 'styled-components';
import {Black20} from 'assets/colorSet';
const Input = ({placeholder, _ref}) => {
  return (
    <InputWrapper>
      <StyledInput ref={_ref} placeholder={placeholder} />
    </InputWrapper>
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
`;
export default Input;
