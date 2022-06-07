import React from 'react';
import {useParams} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import {getPost} from 'redux/slices/postSlice';

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
  const dispatch = useDispatch();
  const params = useParams();
  const id = params.postId;
  React.useEffect(() => {
    dispatch(getPost(id));
  }, [id, dispatch]);
  const post = useSelector((state) => state.post?.post);
  const [replyData, setReplyData] = React.useState({
    nickName: '',
    commentId: '',
    parentId: '',
  });
  return (
    <TabletWrapper>
      <HeaderBar type="party" />
      <Wrapper padding="85px 64px 0 64px">
        <PartyMainBanner
          category={post?.category}
          title={post?.title}
          address={post?.address}
          expiredAt={post?.expiredAt}
        />
      </Wrapper>
      <Wrapper padding="0 0 0 64px">
        <ImgSlider Img={post?.images} />
      </Wrapper>
      <Wrapper padding="0 64px 0 64px">
        <Profile
          nickName={post?.nickname}
          src={post?.profileUrl}
          time={post?.createdAt}
        />
        <Typography fontSize="14px" margin="16px 0">
          {post?.content}
        </Typography>
        <Wrapper margin="1.2rem 0" display="flex" flexWrap="wrap" gap="10px">
          {post?.tags &&
            post?.tags.map((v, idx) => <FIlterTag key={idx}>{v}</FIlterTag>)}
        </Wrapper>
      </Wrapper>
      <Divider />
      <Wrapper padding="0 64px 104px 64px">
        <Typography fontSize="20px" fontWeight="600" margin="24px 0 0 0">
          댓글
        </Typography>
        <React.Fragment>
          {post?.commentList &&
            post?.commentList.map(
              (parentValue, idx) =>
                parentValue !== null &&
                typeof parentValue === 'object' && (
                  <React.Fragment key={idx}>
                    <Profile
                      nickName={parentValue.nickname}
                      time={parentValue.createdAt}
                      address={parentValue.address}
                    />
                    <Comment
                      comment={parentValue.comment}
                      commentId={parentValue.commentId}
                      parentId={parentValue.id}
                      nickName={parentValue.nickname}
                      _onClick={setReplyData}
                    />
                    {parentValue.childList &&
                      parentValue.childList.map((childValue, idx) => (
                        <React.Fragment key={idx}>
                          <Profile
                            nickName={childValue.nickname}
                            time={childValue.createdAt}
                            address={childValue.address}
                          />
                          <Comment
                            parentId={childValue.parent}
                            comment={childValue.comment}
                            commentId={childValue.commentId}
                            parentName={parentValue.nickname}
                            _onClick={setReplyData}
                          />
                        </React.Fragment>
                      ))}
                  </React.Fragment>
                ),
            )}
        </React.Fragment>
      </Wrapper>
      <CommentInput
        postId={post?.postId}
        replyData={replyData}
        _onClick={setReplyData}
      />
    </TabletWrapper>
  );
};

export default DetailPartyTabletTemplate;
