import React from 'react';
import styled from 'styled-components';
import ClearRoundedIcon from '@mui/icons-material/ClearRounded';

function MyInfo() {
  return (
    <>
      <h3>나의 정보</h3>
      <Flex>
        <div>
          <Avata />
          <p>사진 업로드하기</p>
        </div>
      </Flex>
      <h4>닉네임</h4>
      <Btn>
        <p>닉네임</p>
        <ClearRoundedIcon fontSize="small" />
      </Btn>
      <StyleP>이미 사용 중인 닉네임이에요</StyleP>

      <StyleDiv>
        <p>탈퇴하기</p>
      </StyleDiv>
      <StyleBtn>
        <p>수정하기</p>
      </StyleBtn>
    </>
  );
}

const Avata = styled.div`
  border-radius: 50%;
  background-color: lightgray;

  width: 120px;
  height: 120px;
`;

const Flex = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  margin: 2.25rem 0;
`;

const Btn = styled.div`
  height: 48px;
  background-color: lightgray;
  padding: 0 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-bottom: 0.5rem;

  p {
    font-weight: 500;
    font-size: 14px;
    line-height: 120%;
  }
`;

const StyleP = styled.p`
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
`;

const StyleDiv = styled.div`
  margin-top: 223px;

  display: flex;
  justify-content: center;
  align-items: center;

  p {
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;
  }
`;
const StyleBtn = styled.div`
  height: 60px;
  background-color: lightgray;

  display: flex;
  justify-content: center;
  align-items: center;

  p {
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    letter-spacing: 1.25px;
  }
`;

export default MyInfo;
