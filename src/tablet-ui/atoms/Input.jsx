import React from 'react';
import styled from 'styled-components';
import {Black20} from 'assets/colorSet';
const Input = ({placeholder, w = '100%', value, _onChange, _ref}) => {
  return (
    <InputWrapper w={w}>
      <StyledInput
        value={value}
        ref={_ref}
        placeholder={placeholder}
        onChange={_onChange}
      />
    </InputWrapper>
  );
};

const InputWrapper = styled.div`
  width: ${(props) => props.w};
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
