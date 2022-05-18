// import {postActions} from 'redux/slice/postSlice';
// import postAPI from 'api/postAPI';

//미들웨어
const getPostAPI = () => {
  return async function (dispatch) {
    // const response = await postAPI.postsAxios();
    // dispatch(postActions.setPost(response.posts));
  };
};

const postsActions = {getPostAPI};

export default postsActions;
