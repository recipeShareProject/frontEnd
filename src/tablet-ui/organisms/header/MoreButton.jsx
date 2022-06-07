import React from 'react';
import styled from 'styled-components';

import MoreVertIcon from '@mui/icons-material/MoreVert';
import {Black10} from 'assets/colorSet';
import {useNavigate, useParams} from 'react-router-dom';
const MoreButton = ({setShareModal, setDelModal}) => {
  const navigate = useNavigate();
  const params = useParams();
  const postId = params.postId;
  const [open, setOpen] = React.useState(false);
  return (
    <React.Fragment>
      <MoreVert onClick={() => setOpen(!open)} />
      {open && (
        <CloseEffect onClick={() => setOpen(!open)}>
          <DropdownContent>
            {/* <ContentButton
              onClick={() => {
                setShareModal(true);
              }}>
              나눔 완료로 변경하기
            </ContentButton> */}
            <ContentButton
              onClick={() => {
                navigate(`/party/modiParty/${postId}`);
              }}>
              수정하기
            </ContentButton>
            <ContentButton
              onClick={() => {
                setDelModal(true);
              }}>
              삭제하기
            </ContentButton>
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

  border: 1px solid ${Black10};
  border-radius: 4px;
  z-index: 100;
  position: fixed;
  left: calc(100% - 16rem);
  top: 61px;
  overflow: hidden;
`;
const ContentButton = styled.div`
  font-size: 12px;
  font-weight: 500;
  display: flex;
  justify-content: center;
  height: 40px;
  background-color: white;
  display: flex;
  align-items: center;

  cursor: pointer;
`;
const MoreVert = styled(MoreVertIcon)`
  &:hover + ${DropdownContent} {
    display: block;
  }
  cursor: pointer;
`;
export default MoreButton;
