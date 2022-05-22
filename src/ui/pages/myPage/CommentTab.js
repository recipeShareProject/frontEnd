import React from 'react';
import styled from 'styled-components';

const CommentTab = () => {
  return (
    <>
      <div>2021년 0월 0일</div>
      <Flex>
        <StyledImg></StyledImg>
        <div>
          <div>나눔해요</div>
          <div>파티 게시글 제목 </div>
          <Flex>
            <div>00동</div>
            <div>n분 n뒤 까지 </div>
          </Flex>
        </div>
      </Flex>
      <Flex>
        <StyledImg></StyledImg>
        <div>
          <div>나눔해요</div>
          <div>파티 게시글 제목 </div>
          <Flex>
            <div>00동</div>
            <div>n분 n뒤 까지 </div>
          </Flex>
        </div>
      </Flex>
      <div>2021년 0월 0일</div>
      <Flex>
        <StyledImg></StyledImg>
        <div>
          <div>나눔해요</div>
          <div>파티 게시글 제목 </div>
          <Flex>
            <div>00동</div>
            <div>n분 n뒤 까지 </div>
          </Flex>
        </div>
      </Flex>
      <Flex>
        <StyledImg></StyledImg>
        <div>
          <div>나눔해요</div>
          <div>파티 게시글 제목 </div>
          <Flex>
            <div>00동</div>
            <div>n분 n뒤 까지 </div>
          </Flex>
        </div>
      </Flex>
    </>
  );
};
const StyledImg = styled.div`
  background-color: lightgray;
  width: 104px;
  height: 104px;
`;

const Flex = styled.div`
  display: flex;

  margin: 1rem 0;
`;
export default CommentTab;
//  disabled: {
//    false;
//  }
