import http from 'api/http';
//설정
// http.defaults.headers['Content-Type'] = 'application/json';
//   http.defaults.headers.common['Authorization'] =
//     sessionStorage.getItem('token');

//게시글 목록 조회
const getPostsAxios = async () => {
  try {
    const res = await http.get('community');

    return res;
  } catch (error) {
    console.error(error);
    console.log('조회 실패');
  }
};

//게시글 작성
const postWriteAxios = async (data) => {
  http.defaults.headers['Content-Type'] = 'multipart/form-data';

  const frm = new FormData();
  frm.append('title', data.title);
  // frm.append('category', data.category);
  // frm.append('images', data.imagePath);
  // frm.append('content', data.content);
  // frm.append('tags', data.tags);
  // frm.append('expiredAt', data.expiredAt);
  // frm.append('location', data.location);
  // frm.append('latitude', data.latitude);
  // frm.append('longitude', data.longitude);
  // frm.append('content', content);

  try {
    const res = await http.post('community', frm);
    return res;
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
    const res = await http.delete(`community/${communityId}`);
    return res;
  } catch (error) {
    console.error(error);
  }
};

//게시글 수정
const patchPostAxios = async (communityId, data) => {
  http.defaults.headers['Content-Type'] = 'multipart/form-data';

  const frm = new FormData();
  frm.append('title', data.title);
  frm.append('category', data.category);
  frm.append('images', data.imagePath);
  frm.append('content', data.content);
  frm.append('tags', data.tags);
  // frm.append('expiredAt', data.expiredAt);
  frm.append('location', data.location);
  frm.append('latitude', data.latitude);
  frm.append('longitude', data.longitude);
  // frm.append('content', content);

  try {
    const res = await http.patch(`community/${communityId}`, frm);
    return res;
  } catch (error) {
    console.error(error);
  }
};

//나눔완료
const patchPostStateAxios = async (communityId, data) => {
  const jsonData = JSON.stringify(data);

  try {
    const res = await http.patch(`community/${communityId}`, jsonData);
    return res;
  } catch (error) {
    console.error(error);
  }
};

//댓글 작성
const writeCommentAxios = async (communityId, data) => {
  const jsonData = JSON.stringify(data);

  try {
    const res = await http.post(`comment/${communityId}`, jsonData);
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
    );
    return res;
  } catch (error) {
    console.error(error);
  }
};
//댓글 삭제
const delCommentAxios = async (communityId) => {
  try {
    const res = await http.delete(`comment/${communityId}`);
    return res;
  } catch (error) {
    console.error(error);
  }
};
//댓글 수정
const patchCommentAxios = async (communityId, data) => {
  const jsonData = JSON.stringify(data);

  try {
    const res = await http.patch(`comment/${communityId}`, jsonData);
    return res;
  } catch (error) {
    console.error(error);
  }
};
const postApi = {
  getPostsAxios,
  getPostAxios,
  postWriteAxios,
  delPostAxios,
  patchPostAxios,
  patchPostStateAxios,
  writeCommentAxios,
  writeReplyAxios,
  delCommentAxios,
  patchCommentAxios,
};
export default postApi;
