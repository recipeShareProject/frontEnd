import React from 'react';
import styled from 'styled-components';
import {useNavigate} from 'react-router-dom';
import {useSelector} from 'react-redux';

import {Box} from '@mui/material';

import {timeForToday} from 'common/presenters/timeForToday';
import {Black40, Colar100} from 'assets/colorSet';
import NotFound from 'ui/templates/NotFound';
import WritePencilIcon from 'common/icons/WritePencilIcon';
import PartyPost from 'ui/organisms/PartyPost';
const Party = () => {
  const navigate = useNavigate();
  const posts = useSelector((state) => state.post.posts);
  React.useEffect(() => {}, []);

  return (
    <>
      <Box sx={{display: 'flex', alignItems: 'center', marginBottom: '0'}}>
        <Title>파티</Title>
        <Location>OO동</Location>
      </Box>
      <Msg>나의 위치를 기준으로 5km 이내의 게시물이 노출돼요</Msg>
      <PartyPost />
      <PartyPost />
      <PartyPost />
      <PartyPost />
      <PartyPost />
      {posts ? (
        posts.map((v, idx) => (
          <Card key={idx} onClick={() => navigate(`detailParty/${idx}`)}>
            <Thumnail src={v.imagePath[0]}></Thumnail>
            <div>
              <Category>{v.category}</Category>
              <PostTitle>{v.title}</PostTitle>
              <StyleRow>
                <PostLocation>{v.location}</PostLocation>
                <Time>{timeForToday(v.expiredAt, 'party')}</Time>
              </StyleRow>
            </div>
          </Card>
        ))
      ) : (
        <NotFound desc="새로운 게시글이 존재하지 않아요" />
      )}
      <FloatBtn>
        <WritePencilIcon
          onClick={() => {
            navigate('/party/addParty');
          }}
        />
      </FloatBtn>
    </>
  );
};
const Title = styled.p`
  font-weight: bold;
  font-size: 1.4rem;
  margin: 0;
  margin-right: 0.5rem;
`;
const Location = styled.p`
  margin: 0;
  color: ${Black40};
  font-size: 14px;
`;
const Msg = styled.p`
  margin: 0;
  color: ${Black40};
  font-size: 12px;
  margin-top: 0.5rem;
`;
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

  border-radius: 4px;
`;

const StyleRow = styled.div`
  display: flex;
  flex-direction: row;
`;
const Category = styled.p`
  margin: 0;
  color: ${Colar100};
  font-size: 12px;
`;

const PostTitle = styled.p`
  font-weight: bold;
  font-size: 1rem;
  margin: 0;

  margin: 8px 8px 8px 0;
`;

const FloatBtn = styled.div`
  border-radius: 50%;
  background-color: ${Colar100};
  color: white;
  width: 3rem;
  height: 3rem;
  position: fixed;
  left: calc(100% - 4rem);
  top: calc(100% - 8rem);

  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;
`;
const PostLocation = styled.p`
  margin: 0;
  color: black;
  font-size: 12px;
  margin-right: 8px;
`;
const Time = styled.p`
  margin: 0;
  color: ${Black40};
  font-size: 12px;
`;
export default Party;
