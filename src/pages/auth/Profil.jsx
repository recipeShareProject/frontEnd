import React from 'react';
import styled from 'styled-components';
import ClearRoundedIcon from '@mui/icons-material/ClearRounded';
const Profil = (props) => {
  return (
    <>
      <h3>프로필 설정하기</h3>
      <Flex>
        <div>
          <Avata />
          <p>사진 업로드하기</p>
        </div>
      </Flex>
      <h4>닉네임</h4>
      <InputWrapper>
        <StyleInput placeholder="2자에서 8자까지 입력해 주세요"></StyleInput>
        <ClearRoundedIcon />
      </InputWrapper>

      <StyleP>이미 사용 중인 닉네임이에요</StyleP>
      <StyleBtn>
        <p>가입하기</p>
      </StyleBtn>
    </>
  );
};

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

const StyleP = styled.p`
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
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

const InputWrapper = styled.div`
  height: 48px;
  position: relative;
  svg {
    position: absolute;
    bottom: 19px;
    right: 19px;
    width: 9px;
    height: 9px;
  }
`;

const StyleInput = styled.input`
  height: 32px;
  width: 95%;
  background-color: lightgray;
  padding: 0.5rem;
  border: none;
  outline: none;
`;
export default Profil;
