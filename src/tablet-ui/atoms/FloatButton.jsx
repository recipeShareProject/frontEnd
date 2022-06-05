import React from 'react';
import styled from 'styled-components';
import WritePencilIcon from 'common/icons/WritePencilIcon';
import {Colar100} from 'assets/colorSet';
const FloatButton = ({onClick}) => {
  return (
    <FloatBtn>
      <WritePencilIcon onClick={onClick} />
    </FloatBtn>
  );
};
const FloatBtn = styled.div`
  border-radius: 50%;
  background-color: ${Colar100};
  color: white;
  width: 3rem;
  height: 3rem;
  position: fixed;
  left: calc(100% - 4rem);
  top: calc(100% - 8rem);

  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;
`;
export default FloatButton;
