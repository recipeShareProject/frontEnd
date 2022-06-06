import http from 'api/http';
//설정
// http.defaults.headers['Content-Type'] = 'application/json';
//   http.defaults.headers.common['Authorization'] =
//     sessionStorage.getItem('token');
import {getCookie} from 'common/presenters/Cookie';
//설정
// http.defaults.headers['Content-Type'] = 'application/json';
const token = getCookie('token');
const formConfig = {
  headers: {
    'Content-Type': 'multipart/form-data',
    authorization: 'Bearer ' + token,
  },
};
const config = {
  headers: {
    authorization: 'Bearer ' + token,
  },
};

//내정보 가져오기
const getmyInfoAxios = async (data) => {
  const jsonData = JSON.stringify(data);
  try {
    const res = await http.post('user/info', jsonData, config);

    return res.data;
  } catch (error) {
    console.error(error);
  }
};

//회원가입
const signupAxios = async (data) => {
  const frm = new FormData();
  frm.append('nickname', data.nickname);
  frm.append('profileImage', data.profileImage);

  try {
    const res = await http.post('user/signup', data, formConfig);

    return res;
  } catch (error) {
    console.error(error);
  }
};

//회원정보 수정
const patchMyInfoAxios = async (data) => {
  // const frm = new FormData();
  // frm.append('nickname', data.nickname);
  // frm.append('profileImage', data.profileImage);
  const sendData = {
    name: data,
  };
  const jsonData = JSON.stringify(sendData);
  try {
    const res = await http.patch('user/me/edit', jsonData, config);

    return res;
  } catch (error) {
    console.error(error);
  }
};

//회원 로그아웃
const logoutAxios = async () => {
  try {
    const res = await http.post('user/logout', '', config);

    return res.data;
  } catch (error) {
    console.error(error);
  }
};

//나의 레시피글보기
const getMyBoardAxios = async () => {
  try {
    const res = await http.get('user/me/board', config);

    return res.data;
  } catch (error) {
    console.error(error);
  }
};
//나의 파티글 보기
const getMyPostAxios = async () => {
  try {
    const res = await http.get('user/me/community', config);

    return res.data;
  } catch (error) {
    console.error(error);
  }
};
//나의 댓글 보기
const getMyCommentAxios = async () => {
  try {
    const res = await http.get('user/me/comment', config);

    return res.data;
  } catch (error) {
    console.error(error);
  }
};

const userApi = {
  getmyInfoAxios,
  signupAxios,
  patchMyInfoAxios,
  logoutAxios,
  getMyBoardAxios,
  getMyPostAxios,
  getMyCommentAxios,
};
export default userApi;
