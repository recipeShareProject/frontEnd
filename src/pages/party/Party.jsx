import React from 'react';
import styled from 'styled-components';
import {useNavigate} from 'react-router-dom';

function Party() {
  const navigate = useNavigate();
  return (
    <>
      파티 OO동 나의 위치를 기준으로 5km 이내의 게시물이 노출돼요
      <Card onClick={() => navigate('detailParty/1')}>
        <Thumnail></Thumnail>
        <div>
          <div>나눔해요</div>
          <div>파티 게시글 제목</div>
          <RowDiv>
            <div>00동</div>
            <div>n분 n뒤까지</div>
          </RowDiv>
        </div>
      </Card>
      <Card onClick={() => navigate('detailParty/1')}>
        <Thumnail></Thumnail>
        <div>
          <div>나눔해요</div>
          <div>파티 게시글 제목</div>
          <RowDiv>
            <div>00동</div>
            <div>n분 n뒤까지</div>
          </RowDiv>
        </div>
      </Card>
      <Card onClick={() => navigate('detailParty/1')}>
        <Thumnail></Thumnail>
        <div>
          <div>나눔해요</div>
          <div>파티 게시글 제목</div>
          <RowDiv>
            <div>00동</div>
            <div>n분 n뒤까지</div>
          </RowDiv>
        </div>
      </Card>
    </>
  );
}

const Card = styled.div`
  display: flex;
  margin: 1rem 0;

  cursor: pointer;
`;
const Thumnail = styled.div`
  width: 6.5rem;
  height: 6.5rem;

  border: 1px solid gray;
  margin-right: 0.5rem;
`;

const RowDiv = styled.div`
  display: flex;
  flex-direction: row;
`;

export default Party;
