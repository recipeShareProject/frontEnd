import React from 'react';
import styled from 'styled-components';
const Login = () => {
  return (
    <React.Fragment>
      <TextArea>
        <h3>Potluck 시작하기</h3>
        <div>이웃들과 함께</div>
        <div>음식과 기쁨을 나눠보세요!</div>
      </TextArea>
      <Flex>
        <Kakao>
          <p>카카오로 시작하기</p>
        </Kakao>
        <Google>
          <p>구글로 시작하기</p>
        </Google>
      </Flex>
    </React.Fragment>
  );
};

const TextArea = styled.div`
  margin-top: 7.8rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Flex = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin: auto;
  margin-top: 3.75rem;
`;

const Kakao = styled.div`
  width: 216px;
  height: 49px;

  background: #fee500;
  border-radius: 6px;
  margin-bottom: 0.5rem;

  cursor: pointer;
  p {
    margin-left: 1rem;
  }
`;

const Google = styled.div`
  width: 216px;
  height: 49px;

  background: #ffffff;
  border: 1px solid #4285f4;
  border-radius: 6px;

  cursor: pointer;
  p {
    margin-left: 1rem;
  }
`;

export default Login;
