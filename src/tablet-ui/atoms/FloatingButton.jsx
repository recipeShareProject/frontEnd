import React from 'react';
import styled from 'styled-components';
import {useNavigate} from 'react-router';
import WritePencilIcon from 'common/icons/WritePencilIcon';
import {Colar100} from 'assets/colorSet';
import {useState} from 'react';
import {useEffect} from 'react';

const FloatingButton = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    return setOpen(false);
  }, []);

  return (
    <React.Fragment>
      <FloatBtn>
        <WritePencilIcon onClick={() => setOpen(!open)} />
      </FloatBtn>
      {open && (
        <CloseEffect onClick={() => setOpen(!open)}>
          <DropdownContent>
            <div onClick={() => navigate('/recipe/write')}>레시피 추가하기</div>
            <div onClick={() => navigate('/party/addParty')}>
              게시글 추가하기
            </div>
          </DropdownContent>
        </CloseEffect>
      )}
    </React.Fragment>
  );
};
const CloseEffect = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  left: 0;
  top: 0;
`;
const DropdownContent = styled.div`
  width: 160px;
  height: 80px;
  position: fixed;
  left: calc(100% - 11rem);
  top: calc(100% - 14rem);
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  font-size: 12px;
  border-radius: 4px;

  div {
    display: flex;
    justify-content: center;
    height: 40px;
    background-color: white;
    display: flex;
    align-items: center;

    cursor: pointer;
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

export default FloatingButton;
