import React from 'react';
import styled from 'styled-components';
import {useNavigate} from 'react-router-dom';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import CreateRoundedIcon from '@mui/icons-material/CreateRounded';
import LoginRoundedIcon from '@mui/icons-material/LoginRounded';
import profile from 'imgs/profile48.png';
import {Box} from '@mui/material';
import {Black40, Black5} from 'assets/colorSet';
import MyInfoIcon from 'common/icons/MyInfoIcon';
import PencilIcon from 'common/icons/PencilIcon';
import LogoutIcon from 'common/icons/LogoutIcon';

function My() {
  const navigate = useNavigate();
  return (
    <>
      <h3>마이페이지</h3>
      <ProfillDiv>
        <img src={profile} alt="profile" />
        <Box ml={2}>
          <Typography>닉네임</Typography>
          <Typography fontSize="12px" color={Black40}>
            potluck@kakao.com
          </Typography>
        </Box>
      </ProfillDiv>
      <Box mt={5}>
        <Btn onClick={() => navigate('/my/myInfo')}>
          <MyInfoIcon />
          <p>나의 정보</p>
        </Btn>
        <Btn onClick={() => navigate('/my/myPost')}>
          <PencilIcon />
          <p>나의 글</p>
        </Btn>
        <Btn>
          <LogoutIcon />
          <p>로그아웃</p>
        </Btn>
      </Box>
    </>
  );
}

const ProfillDiv = styled.div`
  margin-top: 1.5rem;
  margin-bottom: 1.125rem;
  display: flex;
  align-items: center;
`;

const Btn = styled.div`
  height: 48px;
  padding: 0 2rem;
  display: flex;
  align-items: center;
  border-bottom: 1px solid ${Black5};
  width: 100%;
  margin-left: -1rem;
  p {
    margin-left: 1.5rem;
    font-weight: 500;
    font-size: 14px;
    line-height: 120%;
  }

  cursor: pointer;
`;
// Todo: 글자를 공통으로 빼기
export const Typography = styled.p`
  margin: 0px;
  color: ${(props) => props.color};
  font-size: ${(props) => (props.fontSize ? props.fontSize : '1rem')};
`;
export default My;
