import http from 'api/http';
import {getCookie} from 'common/presenters/Cookie';
//설정
const token = getCookie('token');

const config = {
  headers: {
    authorization: 'Bearer ' + token,
  },
};
const formConfig = {
  headers: {
    'Content-Type': 'multipart/form-data',
    authorization: 'Bearer ' + token,
  },
};
//게시글 목록 조회
const getPostsAxios = async () => {
  try {
    const res = await http.get('community', config);

    return res;
  } catch (error) {
    console.error(error);
    console.log('조회 실패');
  }
};

//게시글 작성
const writePostAxios = async (data) => {
  const frm = new FormData();
  frm.append('title', data.title);
  frm.append('category', data.category);
  frm.append('content', data.content);
  frm.append('tags', data.tags);
  frm.append('expiredAt', data.expiredAt);
  frm.append('address', data.address);
  frm.append('latitude', data.latitude);
  frm.append('longitude', data.longitude);
  data.images.forEach((image) => frm.append('images', image));
  try {
    const res = await http.post('community', frm, formConfig);
    return res.data;
  } catch (error) {
    console.error(error);
  }
};

//게시글 한개 조회
const getPostAxios = async (communityId) => {
  try {
    const res = await http.get(`community/${communityId}`);
    return res;
  } catch (error) {
    console.error(error);
  }
};

//게시글 삭제
const delPostAxios = async (communityId) => {
  try {
    const res = await http.delete(`community/${communityId}`, config);
    return res;
  } catch (error) {
    console.error(error);
  }
};

//게시글 수정
const patchPostAxios = async (communityId, data) => {
  const frm = new FormData();
  frm.append('title', data.title);
  frm.append('category', data.category);
  frm.append('content', data.content);
  frm.append('tags', data.tags);
  frm.append('expiredAt', data.expiredAt);
  frm.append('address', data.address);
  frm.append('latitude', data.latitude);
  frm.append('longitude', data.longitude);
  data.images.forEach((image) =>
    typeof image === 'string'
      ? frm.append('saveimageurl', image)
      : frm.append('images', image),
  );

  try {
    const res = await http.patch(`community/${communityId}`, frm, formConfig);
    return res;
  } catch (error) {
    console.error(error);
  }
};

//나눔완료 에러
const patchPostStateAxios = async (communityId, data) => {
  const jsonData = JSON.stringify(data);
  try {
    const res = await http.patch(
      `community/${communityId}/complete`,
      jsonData,
      config,
    );
    return res;
  } catch (error) {
    console.error(error);
  }
};

//댓글 작성
const writeCommentAxios = async (postId, data) => {
  const jsonData = JSON.stringify(data);

  try {
    const res = await http.post(`comment/${postId}`, jsonData, config);
    return res;
  } catch (error) {
    console.error(error);
  }
};

//대댓글 작성
const writeReplyAxios = async (communityId, commentId, data) => {
  const jsonData = JSON.stringify(data);

  try {
    const res = await http.post(
      `comment/${communityId}/${commentId}`,
      jsonData,
      config,
    );

    return res.data;
  } catch (error) {
    console.error(error);
  }
};
//댓글 삭제
const delCommentAxios = async (communityId) => {
  try {
    const res = await http.delete(`comment/${communityId}`, config);
    return res;
  } catch (error) {
    console.error(error);
  }
};
//댓글 수정
const patchCommentAxios = async (communityId, data) => {
  const jsonData = JSON.stringify(data);

  try {
    const res = await http.patch(`comment/${communityId}`, jsonData, config);
    return res;
  } catch (error) {
    console.error(error);
  }
};
const postApi = {
  getPostsAxios,
  getPostAxios,
  writePostAxios,
  delPostAxios,
  patchPostAxios,
  patchPostStateAxios,
  writeCommentAxios,
  writeReplyAxios,
  delCommentAxios,
  patchCommentAxios,
};
export default postApi;
