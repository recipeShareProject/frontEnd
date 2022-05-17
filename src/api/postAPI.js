import axios from 'axios';

//인스턴스 생성
const apiClicent = axios.create({
  baseURL: process.env.REACT_APP_API_HOST,
});

//------------------------게시글-----------------------//
//게시글 목록 전체 조회
const postsAxios = async () => {
  try {
    const res = await apiClicent.get('posts');

    if (res.status === 200) {
      const sendData = {
        last: res.data.posts.last,
        posts: res.data.posts.content,
        pageNum: res.data.posts.number,
      };

      return sendData;
    }
  } catch (error) {
    console.error(error);
  }
};

const postAPI = {
  postsAxios,
};

export default postAPI;
