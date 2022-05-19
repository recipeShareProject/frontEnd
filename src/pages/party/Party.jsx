import React from 'react';
import styled from 'styled-components';
import {useNavigate} from 'react-router-dom';
import {useSelector} from 'react-redux';
import {timeForToday} from 'common/timeForToday';
function Party() {
  const navigate = useNavigate();
  const posts = useSelector((state) => state.post.posts);

  return (
    <>
      파티 OO동 나의 위치를 기준으로 5km 이내의 게시물이 노출돼요
      {posts.map((v, idx) => (
        <Card key={idx} onClick={() => navigate(`detailParty/${idx}`)}>
          <Thumnail src={v.imagePath[0]}></Thumnail>
          <div>
            <div>{v.category}</div>
            <div>{v.title}</div>
            <RowDiv>
              <div>{v.location}</div>
              <div>{timeForToday(v.expiredAt, 'party')}</div>
            </RowDiv>
          </div>
        </Card>
      ))}
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

  margin-right: 0.5rem;

  background-image: url('${(props) => (props.src ? props.src : '')}');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;

const RowDiv = styled.div`
  display: flex;
  flex-direction: row;
`;

export default Party;
