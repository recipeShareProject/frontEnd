import React from 'react';
import styled from 'styled-components';

import {useSelector} from 'react-redux';
import ImgSlider from 'ui/organisms/ImgSlider';
import LinkRoundedIcon from '@mui/icons-material/LinkRounded';
import {useParams} from 'react-router-dom';

import {timeForToday} from 'common/presenters/timeForToday';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

import {Colar100, Black40, Black20} from 'assets/colorSet';

import HeaderBar from 'ui/templates/header/HeaderBar';
import Wrapper from 'ui/atoms/Wrapper';
import Typography from 'ui/atoms/Typography';
import Divider from 'ui/atoms/Divider';
import Profile from 'ui/organisms/Profile';
import FIlterTag from 'ui/organisms/FIlterTag';
import CommentInput from 'ui/organisms/CommentInput';
import Comment from 'ui/organisms/Comment';
const DetailTemplate = () => {
  const posts = useSelector((state) => state.post.posts);
  const params = useParams();
  const postId = params.postId;
  const {category, content, expiredAt, imagePath, location, tag, title} =
    posts[postId];

  const [replyNickname, setReplyNickname] = React.useState('');
  console.log(replyNickname);
  return (
    <React.Fragment>
      <HeaderBar type="party" />
      <Wrapper padding="72px 0 40px 0">
        <Wrapper padding="0 1rem 0 1rem">
          <Typography fontSize="12px" color={Colar100} margin="0 0 8px 0">
            {category}
          </Typography>
          <Typography fontSize="20px" fontWeight="600" margin="0 0 8px 0">
            {title}
          </Typography>
          <Wrapper display="flex" margin="0 0 1rem 0">
            <Typography fontSize="14px" margin="0 8px 16px 0">
              {location}
            </Typography>
            <Typography color={Black40}>
              {timeForToday(expiredAt, 'party')}
            </Typography>
          </Wrapper>
          <ImgSlider Img={imagePath}></ImgSlider>
          <Profile nickName="닉네임" />
          <Typography fontSize="14px" margin="16px 0">
            {content}
          </Typography>
          {tag.map((v, idx) => (
            <FIlterTag key={idx}>{v}</FIlterTag>
          ))}
        </Wrapper>
        <Divider />
        <Wrapper padding="0 1rem 2rem 1rem">
          <Typography fontSize="20px" fontWeight="600" margin="24px 0 0 0">
            댓글
          </Typography>
          <Comment _onClick={setReplyNickname} />
        </Wrapper>
        <CommentInput _onClick={setReplyNickname} content={replyNickname} />
      </Wrapper>
    </React.Fragment>
  );
};

export default DetailTemplate;
