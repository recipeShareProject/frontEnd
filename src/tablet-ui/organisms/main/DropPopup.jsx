import React from 'react';
import styled from 'styled-components';
import {useNavigate} from 'react-router-dom';
import Typography from 'tablet-ui/atoms/Typography';
const DropPopup = ({setOpen}) => {
  const navigate = useNavigate();

  return (
    <CloseEffect onClick={() => setOpen(false)}>
      <DropdownContent>
        <div>
          <Typography
            fontSize="12px"
            fontWeight="500"
            onClick={() => navigate('/recipe/write')}>
            레시피 등록하기
          </Typography>
        </div>
        <div>
          <Typography
            fontSize="12px"
            fontWeight="500"
            onClick={() => navigate('/party/addParty')}>
            게시글 작성하기
          </Typography>
        </div>
      </DropdownContent>
    </CloseEffect>
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
  position: absolute;
  left: 532px;
  top: 72px;

  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  font-size: 12px;
  border-radius: 4px;
  border: 1px solid Black10;
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
export default DropPopup;
