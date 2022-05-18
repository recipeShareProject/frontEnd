import React from 'react';
import styled from 'styled-components';
import AddIcon from '@mui/icons-material/Add';
import {useNavigate} from 'react-router';
import WritePencilIcon from 'common/icons/WritePencilIcon';
import {Colar100} from 'assets/colorSet';
const Floating = () => {
  const navigate = useNavigate();
  return (
    <>
      <FloatBtn>
        <WritePencilIcon />
      </FloatBtn>
      <DropdownContent>
        <div onClick={() => navigate('/recipe/write')}>레시피 추가하기</div>
        <div onClick={() => navigate('/party/addParty')}>게시글 추가하기</div>
      </DropdownContent>
    </>
  );
};

const DropdownContent = styled.div`
  display: none;
  width: 160px;
  height: 140px;

  position: fixed;
  left: calc(100% - 11rem);
  top: calc(100% - 14rem);
  div {
    height: 40px;
    background-color: gray;
    padding-left: 0.5rem;
    /* margin-bottom: 0.5rem; */
    display: flex;
    align-items: center;

    cursor: pointer;
  }
  &:hover {
    display: block;
  }
  div:nth-child(odd) {
    margin-bottom: 0.5rem;
  }
`;

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

  &:hover + ${DropdownContent} {
    display: block;
  }
`;

export default Floating;
