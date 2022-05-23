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

  return (
    <>
      <Box sx={{display: 'flex', align: 'center', marginBottom: '0'}}>
        <Title>파티</Title>
        <Location>OO동</Location>
      </Box>
      <Msg>나의 위치를 기준으로 5km 이내의 게시물이 노출돼요</Msg>
      <PartyPost />
      {posts ? (
        posts.map((v, idx) => (
          <PartyPost
            key={idx}
            thumnail={v.imagePath[0]}
            category={v.category}
            title={v.title}
            location={v.location}
            time={timeForToday(v.expiredAt, 'party')}
          />
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

export default Party;
