import React from 'react';
import styled from 'styled-components';

import MoreVertIcon from '@mui/icons-material/MoreVert';
const MoreButton = ({setShareModal, setDelModal}) => {
  const [open, setOpen] = React.useState(false);
  return (
    <React.Fragment>
      <MoreVert onClick={() => setOpen(!open)} />
      {open && (
        <CloseEffect onClick={() => setOpen(!open)}>
          <DropdownContent>
            <div
              onClick={() => {
                setShareModal(true);
              }}>
              나눔 완료로 상태변경하기
            </div>
            <div onClick={() => {}}>수정하기</div>
            <div
              onClick={() => {
                setDelModal(true);
              }}>
              삭제하기
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
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  font-size: 12px;
  border-radius: 4px;
  z-index: 100;
  position: fixed;
  left: calc(100% - 11rem);
  /* top: calc(100% - 43rem); */
  top: 61px;

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

const MoreVert = styled(MoreVertIcon)`
  &:hover + ${DropdownContent} {
    display: block;
  }
  cursor: pointer;
`;
export default MoreButton;
