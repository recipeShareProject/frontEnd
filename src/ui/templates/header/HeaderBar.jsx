import React from 'react';
import styled from 'styled-components';
import {useNavigate} from 'react-router-dom';

import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import BookmarkIcon from '@mui/icons-material/Bookmark';

import ModalPopup from 'ui/molecules/ModalPopup';
import HeaderWrapper from 'ui/atoms/HeaderWrapper';

import MoreButton from 'ui/organisms/MoreButton';
import MoreVertIcon from '@mui/icons-material/MoreVert';
const HeaderBar = ({type}) => {
  const navigate = useNavigate();
  const [modal, setModal] = React.useState(false);
  const [shareModal, setShareModal] = React.useState(false);
  const [delModal, setDelModal] = React.useState(false);

  const onClickBack = () => {
    navigate(-1);
  };
  switch (type) {
    case 'recipe':
      return (
        <HeaderWrapper>
          <ArrowBackIosIcon onClick={() => setModal(true)} fontSize="small" />
          <BookmarkIcon />
          {modal && (
            <ModalPopup
              isOn={false}
              content="레시피 등록을 정말 그만두시겠어요?"
              closeEvent={setModal}
              yesEvent={onClickBack}></ModalPopup>
          )}
        </HeaderWrapper>
      );
    case 'party':
      return (
        <HeaderWrapper>
          <ArrowBackIosIcon onClick={onClickBack} fontSize="small" />

          <MoreButton setShareModal={setShareModal} setDelModal={setDelModal} />
          {shareModal && (
            <ModalPopup
              isOn={false}
              content="나눔완료로 변경하시겠어요? 변경시 더 이상 상태를 수정할 수 없어요"
              closeEvent={setShareModal}
              yesEvent={() => {}}></ModalPopup>
          )}

          {delModal && (
            <ModalPopup
              isOn={false}
              content="게시물을 정말 삭제하시겠어요?"
              closeEvent={setDelModal}
              yesEvent={() => {}}></ModalPopup>
          )}
        </HeaderWrapper>
      );
    case 'writeParty':
      return (
        <HeaderWrapper>
          <ArrowBackIosIcon onClick={() => setModal(true)} fontSize="small" />
          {modal && (
            <ModalPopup
              isOn={false}
              content="게시글 등록을 정말 그만두시겠어요?"
              closeEvent={setModal}
              yesEvent={onClickBack}></ModalPopup>
          )}
        </HeaderWrapper>
      );
    default:
      <HeaderWrapper>
        <ArrowBackIosIcon onClick={onClickBack} fontSize="small" />
      </HeaderWrapper>;
  }
  return <React.Fragment></React.Fragment>;
};

const DropdownContent = styled.div`
  width: 160px;
  height: 80px;
  position: fixed;
  left: calc(100% - 11rem);
  top: calc(100% - 36rem);
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  font-size: 12px;
  border-radius: 4px;
  z-index: 100;

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
export default HeaderBar;
