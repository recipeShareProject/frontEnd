import React from 'react';
import styled from 'styled-components';

import {useSelector} from 'react-redux';
import ImgSlider from 'components/common/ImgSlider';
import LinkRoundedIcon from '@mui/icons-material/LinkRounded';
import {useParams} from 'react-router-dom';

import Tag from 'components/common/Tag';
import {timeForToday} from 'common/timeForToday';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
function DetailParty() {
  const posts = useSelector((state) => state.post.posts);
  const params = useParams();
  const postId = params.postId;
  const {category, content, expiredAt, imagePath, location, tag, title} =
    posts[postId];

  return (
    <>
      <ShareText>{category}</ShareText>
      <Title>{title}</Title>
      <FlexDiv>
        <TextDiv>{location}</TextDiv>
        <TextDiv>{timeForToday(expiredAt)}</TextDiv>
      </FlexDiv>
      <ImgSlider Img={imagePath}></ImgSlider>

      <Content>{content}</Content>
      <Tag tag={tag}></Tag>

      <Title>댓글</Title>
      <InputWrapper>
        <StyledInput placeholder="댓글을 남겨보세요"></StyledInput>
        <ArrowForwardIcon></ArrowForwardIcon>
      </InputWrapper>
      <ProfillDiv>
        <StyleAvata></StyleAvata>
        <div>
          <p>닉네임</p>
          <FlexDiv>
            <p>OO동</p>
            <p>n분전</p>
          </FlexDiv>
        </div>
      </ProfillDiv>
      <Content>
        숟가락을 이용해 전복 살과 껍질을 분리하고 내장도 조심스럽게 떼어 내세요.
        내장은 버리지 말고 죽이나 찌개 등에 넣어 드셔도 좋아요.
      </Content>
      <div>답글달기</div>
    </>
  );
}

const ShareText = styled.div`
  font-size: 14px;
  line-height: 140%;
`;

const Title = styled.div`
  font-weight: 700;
  font-size: 20px;
  line-height: 120%;
`;

const FlexDiv = styled.div`
  display: flex;
  margin-bottom: 1rem;
`;

const TextDiv = styled.div`
  font-size: 14px;
  line-height: 140%;
  margin-right: 0.5rem;
`;

const StyleAvata = styled.div`
  border-radius: 50%;
  background-color: gray;
  height: 2.25rem;
  width: 2.25rem;
  margin-right: 0.75rem;
`;

const ProfillDiv = styled.div`
  margin-top: 1.5rem;
  display: flex;
  align-items: center;
`;

const Content = styled.div`
  font-size: 14px;
  line-height: 140%;

  letter-spacing: 0.25px;
`;

const InputWrapper = styled.div`
  margin-top: 0.5rem;

  background-color: #e5e5e5;
  padding: 10px 8px;

  display: flex;
  justify-content: space-between;
`;

const StyledInput = styled.input`
  background-color: #e5e5e5;
  font-size: 1rem;
  line-height: 1.5rem;

  outline: none;
  border: none;
`;
export default DetailParty;
