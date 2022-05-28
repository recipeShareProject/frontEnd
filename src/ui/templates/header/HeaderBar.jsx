import React from 'react';
import {useNavigate, useParams} from 'react-router-dom';
import {useDispatch} from 'react-redux';

import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import BookmarkIcon from '@mui/icons-material/Bookmark';

import AlarmIcon from 'common/icons/AlarmIcon';
import ProfileIcon from 'common/icons/ProfileIcon';

import ModalPopup from 'ui/molecules/ModalPopup';
import HeaderWrapper from 'ui/atoms/HeaderWrapper';
import MoreButton from 'ui/organisms/MoreButton';
import Wrapper from 'ui/atoms/Wrapper';

import {delPost} from 'redux/slices/postSlice';
const HeaderBar = ({type}) => {
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
              <AlarmIcon />
            </Wrapper>
            <ProfileIcon />
          </Wrapper>
        </HeaderWrapper>
      );
    case 'recipe':
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
              yesEvent={() => {
                dispatch(delPost(postId));
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
    default:
      return (
        <HeaderWrapper>
          <ArrowBackIosIcon onClick={onClickBack} fontSize="small" />
        </HeaderWrapper>
      );
  }
};

export default HeaderBar;
