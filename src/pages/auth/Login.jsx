import React from 'react';
import styled from 'styled-components';
import KakaoIcon from 'asset/img/KakaoIcon.png';
import GoogleIcon from 'asset/img/GoogleIcon.png';

const Login = () => {
  return (
    <React.Fragment>
      <TextArea>
        <h3>Potluck 시작하기</h3>
        <div>이웃들과 함께</div>
        <div>음식과 기쁨을 나눠보세요!</div>
      </TextArea>
      <Flex>
        <Kakao onClick={() => {}}>
          <Icon src={KakaoIcon} />
          <p>카카오로 시작하기</p>
        </Kakao>
        <Google>
          <Icon src={GoogleIcon} />
          <p>구글로 시작하기</p>
        </Google>
      </Flex>
    </React.Fragment>
  );
};
const Icon = styled.div`
  width: 20px;
  height: 20px;
  background-image: url('${(props) => props.src}');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`;
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
  height: 49px;

  background: #fee500;
  border-radius: 6px;
  margin-bottom: 0.5rem;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  padding: 0.9rem 2.375rem;

  font-weight: 500;
  font-size: 14px;
  line-height: 140%;
  /* identical to box height, or 20px */

  letter-spacing: 0.15px;

  color: #191919;
  cursor: pointer;
  p {
    margin-left: 12px;
  }
  box-sizing: border-box;
`;

const Google = styled.div`
  height: 49px;

  background: #ffffff;
  border: 1px solid #4285f4;
  border-radius: 6px;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  padding: 0.9rem 2.8rem;

  cursor: pointer;

  font-size: 14px;
  line-height: 140%;
  color: #191919;
  letter-spacing: 0.15px;
  p {
    margin-left: 12px;
  }
  box-sizing: border-box;
`;

export default Login;
