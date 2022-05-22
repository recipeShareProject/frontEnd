import React from 'react';
import styled from 'styled-components';
import profile120 from 'assets/imgs/profile120.png';
import {Typography} from './My';
import {Black20, Black40, Colar100} from 'assets/colorSet';
import {Box} from '@mui/material';

const MyInfo = () => {
  return (
    <>
      <h3>나의 정보</h3>
      <Flex>
        <ProfileWrapper>
          <ProfileImg src={profile120} alt="" />
          <Typography color={Black40} fontSize="14px">
            사진 업로드하기
          </Typography>
        </ProfileWrapper>
      </Flex>
      <h4>닉네임</h4>
      <Box>
        <FilterInputWrapper>
          <FilterInput placeholder="2자에서 8자까지 입력해주세요"></FilterInput>
        </FilterInputWrapper>
      </Box>
      <StyleP>이미 사용 중인 닉네임이에요</StyleP>

      <Box>
        <SubmitButton background="white" color={Black20} bottom="120px">
          탈퇴하기
        </SubmitButton>
        <SubmitButton
          type="submit"
          background={Colar100}
          color="white"
          bottom="60px">
          가입하기
        </SubmitButton>
      </Box>
    </>
  );
};

const Flex = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  margin: 2.25rem 0;
`;

const ProfileWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;
const ProfileImg = styled.img`
  margin-bottom: 1rem;
`;

const FilterInputWrapper = styled.div`
  width: 100%;
  height: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0px 10px;
  box-sizing: border-box;
  border-bottom: 1px solid ${Black20};
`;

const FilterInput = styled.input`
  width: 100%;
  border: none;
  background: none;
`;

const StyleP = styled.p`
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  color: ${Colar100};
`;

const SubmitButton = styled.button`
  width: 100%;
  background: ${(props) => props.background};
  position: fixed;
  bottom: ${(props) => props.bottom};
  margin-left: -1rem;
  border: none;
  padding: 20px;
  color: ${(props) => props.color};
`;

export default MyInfo;
