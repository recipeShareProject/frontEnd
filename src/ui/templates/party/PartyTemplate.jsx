import React from 'react';
import styled from 'styled-components';
import {useNavigate} from 'react-router-dom';
import {useSelector} from 'react-redux';

import {timeForToday} from 'common/presenters/timeForToday';
import {Black40, Colar100} from 'assets/colorSet';

import WritePencilIcon from 'common/icons/WritePencilIcon';

import Wrapper from 'ui/atoms/Wrapper';
import Header from 'ui/templates/header/Header';
import Navigation from 'ui/templates/navigation/Navigation';
import Typography from 'ui/atoms/Typography';
import PartyPost from 'ui/organisms/PartyPost';
import NotFound from 'ui/templates/NotFound';
const PartyTemplate = () => {
  const navigate = useNavigate();
  const posts = useSelector((state) => state.post.posts);

  return (
    <React.Fragment>
      <Header />
      <Wrapper padding="72px 1rem 60px 1rem">
        <Wrapper display="flex" align="center">
          <Typography fontSize="20px" fontWeight="600" margin="0 8px 0 0">
            파티
          </Typography>
          <Typography fontSize="14px" color={Black40}>
            OO동
          </Typography>
        </Wrapper>
        <Typography fontSize="12px" color={Black40} margin="8px 0 24px 0">
          나의 위치를 기준으로 5km 이내의 게시물이 노출돼요
        </Typography>
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
      </Wrapper>
      <Navigation />
    </React.Fragment>
  );
};

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

export default PartyTemplate;
