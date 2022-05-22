import React from 'react';
import styled from 'styled-components';

const PrimaryButton = ({background, color, children}) => {
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
  position: fixed;
  bottom: 0px;
  margin-left: -1rem;
  border: none;
  padding: 20px;
  color: ${(props) => props.color};
`;
