import React from 'react';
import styled from 'styled-components';

const PrimaryButton = ({background, color, fixed, _onClick, children}) => {
  return (
    <StyledButton
      fixed={fixed}
      background={background}
      color={color}
      onClick={_onClick}>
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

  ${(props) => (props.fixed ? {position: 'fixed', bottom: 0, left: 0} : '')}
`;
