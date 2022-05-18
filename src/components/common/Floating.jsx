import React from 'react';
import styled from 'styled-components';
import {useNavigate} from 'react-router';
import WritePencilIcon from 'common/icons/WritePencilIcon';
import {Colar100} from 'assets/colorSet';
import {useState} from 'react';
import {useEffect} from 'react';

const Floating = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    return setOpen(false);
  }, []);

  return (
    <>
      <FloatBtn>
        <WritePencilIcon onClick={() => setOpen(!open)} />
      </FloatBtn>
      {open && (
        <DropdownContent>
          <div onClick={() => navigate('/recipe/write')}>레시피 추가하기</div>
          <div onClick={() => navigate('/party/addParty')}>게시글 추가하기</div>
        </DropdownContent>
      )}
    </>
  );
};

const DropdownContent = styled.div`
  width: 160px;
  height: 80px;
  position: fixed;
  left: calc(100% - 11rem);
  top: calc(100% - 14rem);
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  font-size: 12px;

  div {
    display: flex;
    justify-content: center;
    height: 40px;
    background-color: white;
    display: flex;
    align-items: center;

    cursor: pointer;
  }

  div:nth-child(odd) {
    // margin-bottom: 0.5rem;
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
