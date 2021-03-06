import React from 'react';
import {useNavigate, useParams} from 'react-router-dom';
import {useDispatch} from 'react-redux';

import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import BookmarkIcon from '@mui/icons-material/Bookmark';

import AlarmIcon from 'common/icons/AlarmIcon';
import ProfileIcon from 'common/icons/ProfileIcon';

import HeaderWrapper from 'tablet-ui/atoms/HeaderWrapper';
import Wrapper from 'tablet-ui/atoms/Wrapper';
import MoreButton from 'tablet-ui/organisms/header/MoreButton';
import ModalPopup from 'tablet-ui/molecules/ModalPopup';

import {delPost, postActions} from 'redux/slices/postSlice';
const TabletHeaderBar = ({type}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const params = useParams();
  const postId = params.postId;
  const [modal, setModal] = React.useState(false);
  const [shareModal, setShareModal] = React.useState(false);
  const [delModal, setDelModal] = React.useState(false);

  const onClickBack = () => {
    navigate(-1);
  };
  const moveToNoti = () => {
    navigate('/noti');
  };
  switch (type) {
    case 'my':
      return (
        <HeaderWrapper>
          <ArrowBackIosIcon onClick={onClickBack} fontSize="small" />
          <Wrapper display="flex" justify="center" align="center">
            <Wrapper _onClick={moveToNoti} margin="0 11px 0 0">
              {/* 
              todo:서버개발
              <AlarmIcon /> */}
            </Wrapper>
            <ProfileIcon />
          </Wrapper>
        </HeaderWrapper>
      );
    case 'recipe':
      return (
        <HeaderWrapper>
          <ArrowBackIosIcon onClick={onClickBack} fontSize="small" />
          <BookmarkIcon fontSize="small" />
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
              content={
                '나눔완료로 변경하시겠어요?\n 변경시 더 이상 상태를 수정할 수 없어요'
              }
              closeEvent={setShareModal}
              yesEvent={() => {}}></ModalPopup>
          )}

          {delModal && (
            <ModalPopup
              isOn={false}
              content="게시물을 정말 삭제하시겠어요?"
              closeEvent={setDelModal}
              yesEvent={() => {
                dispatch(delPost(postId));
                dispatch(postActions.deletePost(postId));
                navigate('/party');
              }}></ModalPopup>
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
    case 'writeRecipe':
      return (
        <HeaderWrapper>
          <ArrowBackIosIcon onClick={() => setModal(true)} fontSize="small" />

          {modal && (
            <ModalPopup
              isOn={false}
              content="레시피 등록을 정말 그만두시겠어요?"
              closeEvent={setModal}
              yesEvent={onClickBack}></ModalPopup>
          )}
        </HeaderWrapper>
      );
    default:
      return (
        <HeaderWrapper>
          <ArrowBackIosIcon onClick={onClickBack} fontSize="small" />
        </HeaderWrapper>
      );
  }
};

export default TabletHeaderBar;
