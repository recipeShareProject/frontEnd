import React from 'react';

import TabletWrapper from 'tablet-ui/atoms/TabletWrapper';
import HeaderBar from 'tablet-ui/templates/header/TabletHeaderBar';
import PartyMainBanner from 'tablet-ui/organisms/party/PartyMainBanner';
import Wrapper from 'tablet-ui/atoms/Wrapper';
import ImgSlider from 'tablet-ui/organisms/ImgSlider';
import Profile from 'tablet-ui/organisms/Profile';
import Typography from 'tablet-ui/atoms/Typography';
import FIlterTag from 'tablet-ui/organisms/FIlterTag';
import Divider from 'tablet-ui/atoms/Divider';
import Comment from 'tablet-ui/organisms/party/Comment';
import CommentInput from 'tablet-ui/organisms/party/CommentInput';
const DetailPartyTabletTemplate = () => {
  return (
    <TabletWrapper>
      <HeaderBar type="party" />
      <Wrapper padding="85px 64px 0 64px">
        <PartyMainBanner
          category={'나눔해요'}
          title={'게시글 제목'}
          address={'oo동'}
          expiredAt={'2022-06-01T17:35:28'}
        />
      </Wrapper>
      <Wrapper padding="0 0 0 64px">
        <ImgSlider />
      </Wrapper>
      <Wrapper padding="0 64px 0 64px">
        <Profile nickName="닉네임" time={'2022-06-01T17:35:28'} />
        <Typography fontSize="14px" margin="16px 0">
          {/* {content} */}
          여기에는 내용이 들어가는 곳이에요
        </Typography>
        <Wrapper margin="1.2rem 0" display="flex" flexWrap="wrap" gap="10px">
          {/* {tags && tags.map((v, idx) => <FIlterTag key={idx}>{v}</FIlterTag>)} */}
          <FIlterTag>태그</FIlterTag>
          <FIlterTag>태그</FIlterTag>
          <FIlterTag>태그</FIlterTag>
          <FIlterTag>태그</FIlterTag>
          <FIlterTag>태그</FIlterTag>
        </Wrapper>
      </Wrapper>
      <Divider />
      <Wrapper padding="0 64px 104px 64px">
        <Typography fontSize="20px" fontWeight="600" margin="24px 0 0 0">
          댓글
        </Typography>
        <React.Fragment key={'v.commentId'}>
          <Profile
            nickName={'v.nickName'}
            time={'v.createdAt'}
            address="OO동"
          />
          <Comment
            comment={'v.comment'}
            commentId={'v.commentId'}
            _onClick={'setReplyData'}
          />
          <Profile
            nickName={'v.nickName'}
            time={'v.createdAt'}
            address="OO동"
          />
          <Comment
            comment={'v.comment'}
            commentId={'v.commentId'}
            _onClick={'setReplyData'}
          />
          <Profile
            nickName={'v.nickName'}
            time={'v.createdAt'}
            address="OO동"
          />
          <Comment
            comment={'v.comment'}
            commentId={'v.commentId'}
            _onClick={'setReplyData'}
          />
        </React.Fragment>
      </Wrapper>
      <CommentInput
      // postId={postId}
      // replyData={replyData}
      // _onClick={setReplyData}
      />
    </TabletWrapper>
  );
};

export default DetailPartyTabletTemplate;
