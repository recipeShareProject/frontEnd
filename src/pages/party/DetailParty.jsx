import React from 'react';
import styled from 'styled-components';

import {useSelector} from 'react-redux';
import ImgSlider from 'components/common/ImgSlider';
import LinkRoundedIcon from '@mui/icons-material/LinkRounded';
import {useParams} from 'react-router-dom';

import Tag from 'components/common/Tag';
import {timeForToday} from 'common/timeForToday';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

import {Colar100, Black40, Black20} from 'assets/colorSet';
import SendIcon from 'common/icons/SendIcon';

import RecipeReview from 'components/recipe/RecipeReview';
const DetailParty = () => {
  const posts = useSelector((state) => state.post.posts);
  const params = useParams();
  const postId = params.postId;
  const {category, content, expiredAt, imagePath, location, tag, title} =
    posts[postId];

  const [ReplyNickname, setReplyNickname] = React.useState('');

  return (
    <>
      <Nickname>닉네임</Nickname>
      <Title>{title}</Title>
      <StyleFlex>
        <Location>{location}</Location>
        <Time>{timeForToday(expiredAt, 'party')}</Time>
      </StyleFlex>
      <ImgSlider Img={imagePath}></ImgSlider>
      <Content>{content}</Content>
      <Tag tag={tag}></Tag>

      <InputWrapper content={ReplyNickname}>
        <CommentInput placeholder="댓글을 남겨보세요" />
        <SendIcon />
      </InputWrapper>
      <CommentTitle>댓글</CommentTitle>
      <Profile>
        <StyleAvata />

        <div>
          <CommentNickname>닉네임</CommentNickname>
          <StyleFlex>
            <CommentLocation>OO동</CommentLocation>
            <CommentTime>n분 전</CommentTime>
          </StyleFlex>
        </div>
      </Profile>
      <ComentContent>
        숟가락을 이용해 전복 살과 껍질을 분리하고 내장도 조심스럽게 떼어 내세요.
        내장은 버리지 말고 죽이나 찌개 등에 넣어 드셔도 좋아요.
      </ComentContent>
      <Reply onClick={() => setReplyNickname('닉네임')}>답글달기</Reply>
    </>
  );
};

const Nickname = styled.div`
  font-size: 12px;
  color: ${Colar100};
  margin-bottom: 8px;
`;

const Title = styled.div`
  font-weight: 600;
  font-size: 20px;
  line-height: 120%;
  margin-bottom: 8px;
`;
const Location = styled.div`
  font-weight: 400;
  font-size: 14px;
  line-height: 150%;
  margin-right: 8px;
`;
const Time = styled.div`
  color: ${Black40};
`;
const StyleFlex = styled.div`
  display: flex;
  margin-bottom: 1rem;
`;

const StyleAvata = styled.div`
  border-radius: 50%;
  background-color: gray;
  height: 2.25rem;
  width: 2.25rem;
  margin-right: 0.75rem;
`;

const Profile = styled.div`
  margin-top: 1rem;
  display: flex;
  align-items: center;
`;

const Content = styled.div`
  font-size: 14px;
  line-height: 140%;

  letter-spacing: 0.25px;
`;

const InputWrapper = styled.div`
  width: 100%;
  height: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0px 10px;
  box-sizing: border-box;
  border-bottom: 1px solid ${Black20};
  font-size: 14px;
  &:before {
    content: '${(props) => props.content}';
    color: ${Colar100};
    font-size: 12px;
    width: ${(props) => (props.content ? '3rem' : '')};
  }
`;

const CommentInput = styled.input`
  width: 100%;
  border: none;
  background: none;
`;

const CommentTitle = styled.div`
  font-weight: 600;
  font-size: 20px;
  line-height: 120%;
  margin-top: 24px;
`;
const CommentNickname = styled.div`
  font-weight: 400;
  font-size: 14px;
  line-height: 150%;
`;
const CommentLocation = styled.div`
  font-weight: 400;
  font-size: 12px;
  line-height: 130%;
  margin-right: 8px;
`;
const CommentTime = styled.div`
  font-weight: 400;
  font-size: 12px;
  line-height: 130%;
  color: ${Black40};
`;
const ComentContent = styled.div`
  font-size: 14px;
  line-height: 150%;

  letter-spacing: 0.25px;
  margin-bottom: 8px;
`;
const Reply = styled.div`
  font-weight: 400;
  font-size: 12px;
  line-height: 130%;
  color: ${Black40};
`;

export default DetailParty;
