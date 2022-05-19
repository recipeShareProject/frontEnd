import React from 'react';
import styled from 'styled-components';
import {useNavigate} from 'react-router-dom';

import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import BookmarkIcon from '@mui/icons-material/Bookmark';
function FooBar({type}) {
  const navigate = useNavigate();

  const onClickBack = () => {
    navigate(-1);
  };
  switch (type) {
    case 'back':
      return (
        <StyleHeader>
          <ArrowBackIosIcon onClick={onClickBack} fontSize="small" />
        </StyleHeader>
      );
    case 'recipe':
      return (
        <StyleHeader>
          <ArrowBackIosIcon onClick={onClickBack} fontSize="small" />
          <BookmarkIcon />
        </StyleHeader>
      );
    case 'party':
      return (
        <StyleHeader>
          <ArrowBackIosIcon onClick={onClickBack} fontSize="small" />
          <MoreVert />
          <DropdownContent>
            <div onClick={() => {}}>나눔 완료로 상태변경하기</div>
            <div onClick={() => {}}>수정하기</div>
            <div onClick={() => {}}>삭제하기</div>
          </DropdownContent>
        </StyleHeader>
      );

    default:
      break;
  }
  return <React.Fragment></React.Fragment>;
}

const StyleHeader = styled.div`
  height: 40px;
  padding: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const DropdownContent = styled.div`
  display: none;
  width: 160px;
  height: 140px;
  z-index: 1;
  position: fixed;
  left: 180px;
  top: 60px;
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
  div:nth-child(n) {
    margin-bottom: 0.5rem;
  }
`;

const MoreVert = styled(MoreVertIcon)`
  &:hover + ${DropdownContent} {
    display: block;
  }
  cursor: pointer;
`;
export default FooBar;
