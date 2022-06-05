import React from 'react';
import styled from 'styled-components';
import {Black5} from 'assets/colorSet';
const MyButton = ({children, _onClick}) => {
  return <Btn onClick={_onClick}>{children}</Btn>;
};
const Btn = styled.div`
  height: 48px;
  padding: 0 64px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid ${Black5};

  p {
    margin-left: 1.5rem;
    font-weight: 500;
    font-size: 14px;
    line-height: 120%;
  }

  cursor: pointer;
`;
export default MyButton;
