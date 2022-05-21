import React from 'react';
import styled from 'styled-components';
const Noti = () => {
  return (
    <>
      <h3>알림</h3>
      <StyleFlex>
        <div>비우기</div>
      </StyleFlex>
      <Flex>
        <Profill>
          <StyledImg />
        </Profill>
        <div>
          <div>OO님이 나의 글에 댓글을 남겼어요</div>
          <div>아직도 나눔 하시나요? 저도 받고 싶어요 답 주세요!</div>

          <div>n분 전 </div>
        </div>
      </Flex>
    </>
  );
};
const StyleFlex = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const StyledImg = styled.div`
  background-color: lightgray;
  border-radius: 50%;
  width: 36px;
  height: 36px;
`;
const Profill = styled.div`
  margin-right: 1rem;
`;
const Flex = styled.div`
  display: flex;
  padding: 0.75rem 0;
`;

export default Noti;
