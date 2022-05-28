import postActions from 'redux/slices/postSlice';
import postApi from 'api/postApi';

//미들웨어
const getPostAPI = (postId) => {
  return async function (dispatch) {
    const res = await postApi.getPostAxios(1);
    console.log(res);

    // dispatch(postActions.setPost(res.posts));
  };
};

const getPostsAPI = () => {
  return async function (dispatch) {
    const res = await postApi.getPostsAxios();
    console.log(res);

    dispatch(postActions.setPost(res.posts));
  };
};
const postAction = {getPostAPI, getPostsAPI};

export default postAction;
