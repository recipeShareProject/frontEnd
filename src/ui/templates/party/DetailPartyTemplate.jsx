import React from 'react';
import {useParams} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import {getPost} from 'redux/slices/postSlice';

import ImgSlider from 'ui/organisms/ImgSlider';

import HeaderBar from 'ui/templates/header/HeaderBar';
import Wrapper from 'ui/atoms/Wrapper';
import Typography from 'ui/atoms/Typography';
import Divider from 'ui/atoms/Divider';
import Profile from 'ui/organisms/Profile';
import FIlterTag from 'ui/organisms/FIlterTag';
import CommentInput from 'ui/organisms/party/CommentInput';
import Comment from 'ui/organisms/party/Comment';
import PartyMainBanner from 'ui/organisms/party/PartyMainBanner';
const DetailTemplate = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const id = params.postId;
  React.useEffect(() => {
    dispatch(getPost(id));
  }, [id, dispatch]);
  const post = useSelector((state) => state.post.post);
  const {
    category,
    content,
    createdAt,
    expiredAt,
    images,
    address,
    tags,
    title,
    postId,
    commentList,
    profileUrl,
    nickname,
  } = post;
  const [replyData, setReplyData] = React.useState({
    nickName: '',
    commentId: '',
    parentId: '',
  });

  return (
    <React.Fragment>
      <HeaderBar type="party" />
      <Wrapper padding="72px 0 40px 0">
        <Wrapper padding="0 1rem 0 1rem">
          <PartyMainBanner
            category={category}
            title={title}
            address={address}
            expiredAt={expiredAt}
          />

          <ImgSlider Img={images}></ImgSlider>
          <Profile nickName={nickname} src={profileUrl} time={createdAt} />
          <Typography fontSize="14px" margin="16px 0">
            {content}
          </Typography>
          <Wrapper margin="1.2rem 0" display="flex" flexWrap="wrap" gap="10px">
            {tags && tags.map((v, idx) => <FIlterTag key={idx}>{v}</FIlterTag>)}
          </Wrapper>
        </Wrapper>
        <Divider />
        <Wrapper padding="0 1rem 2rem 1rem">
          <Typography fontSize="20px" fontWeight="600" margin="24px 0 0 0">
            댓글
          </Typography>
          <React.Fragment>
            {commentList &&
              commentList.map(
                (parentValue) =>
                  parentValue !== null &&
                  typeof parentValue === 'object' && (
                    <React.Fragment key={parentValue.id}>
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
                        parentValue.childList.map((childValue) => (
                          <React.Fragment key={childValue.id}>
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
          postId={postId}
          replyData={replyData}
          _onClick={setReplyData}
        />
      </Wrapper>
    </React.Fragment>
  );
};

export default DetailTemplate;
