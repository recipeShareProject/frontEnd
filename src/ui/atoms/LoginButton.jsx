import React from 'react';
import styled from 'styled-components';

const LoginButton = ({background, border, src, href, margin, children}) => {
  return (
    <StyledButton background={background} border={border} margin={margin}>
      <Icon src={src}></Icon>
      <a href={href}>{children}</a>
    </StyledButton>
  );
};

const StyledButton = styled.div`
  height: 49px;
  background: ${(props) => props.background};
  border: 1px solid #4285f4;
  border-radius: 6px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  padding: 0.9rem 2.375rem;
  margin: ${(props) => props.margin};

  font-weight: 500;
  font-size: 14px;
  line-height: 140%;

  letter-spacing: 0.15px;

  cursor: pointer;
  a {
    margin-left: 12px;
    text-decoration: none;
    color: #191919;
  }
  box-sizing: border-box;
`;
const Icon = styled.div`
  width: 20px;
  height: 20px;
  background-image: url('${(props) => props.src}');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`;
export default LoginButton;
