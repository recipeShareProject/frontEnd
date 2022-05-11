import React from 'react';
import styled from 'styled-components';
import {useNavigate} from 'react-router-dom';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import CreateRoundedIcon from '@mui/icons-material/CreateRounded';
import LoginRoundedIcon from '@mui/icons-material/LoginRounded';

function My() {
  const navigate = useNavigate();
  return (
    <>
      <h3>마이페이지</h3>
      <ProfillDiv>
        <StyleAvata></StyleAvata>
        <div>
          <div>닉네임</div>
          <div>potluck@kakao.com</div>
        </div>
      </ProfillDiv>
      <Btn onClick={() => navigate('/my/myInfo')}>
        <CreateRoundedIcon />
        <p>나의 정보</p>
      </Btn>
      <Btn onClick={() => navigate('/my/myPost')}>
        <PersonRoundedIcon />
        <p>나의 글</p>
      </Btn>
      <Btn>
        <LoginRoundedIcon />
        <p>로그아웃</p>
      </Btn>
    </>
  );
}

const StyleAvata = styled.div`
  border-radius: 50%;
  background-color: gray;
  height: 2.25rem;
  width: 2.25rem;
  margin-right: 0.75rem;
`;

const ProfillDiv = styled.div`
  margin-top: 1.5rem;
  margin-bottom: 1.125rem;
  display: flex;
`;

const Btn = styled.div`
  height: 48px;
  background-color: lightgray;
  padding: 0 1rem;
  display: flex;
  align-items: center;

  margin-bottom: 0.5rem;

  p {
    margin-left: 1.5rem;
    font-weight: 500;
    font-size: 14px;
    line-height: 120%;
  }

  cursor: pointer;
`;

export default My;
