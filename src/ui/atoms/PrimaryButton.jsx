import React from 'react';
import styled from 'styled-components';

const PrimaryButton = ({background, color, fix, children}) => {
  return (
    <StyledButton background={background} color={color}>
      {children}
    </StyledButton>
  );
};

export default PrimaryButton;
const StyledButton = styled.button`
  width: 100%;
  background: ${(props) => props.background};
  padding: 21px;
  color: ${(props) => props.color};
  border: none;
  outline: none;
`;
