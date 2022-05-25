import http from 'api/http';
//설정
// http.defaults.headers['Content-Type'] = 'application/json';
//   http.defaults.headers.common['Authorization'] =
//     sessionStorage.getItem('token');

//회원가입
const signupAxios = async (data) => {
  const frm = new FormData();
  frm.append('nickname', data.nickname);
  frm.append('profileImage', data.profileImage);

  try {
    const res = await http.post('user/signup', data);

    return res;
  } catch (error) {
    console.error(error);
  }
};

//회원정보 수정
const patchMyInfoAxios = async (data) => {
  const frm = new FormData();
  frm.append('nickname', data.nickname);
  frm.append('profileImage', data.profileImage);
  try {
    const res = await http.patch('user/me/edit', data);

    return res;
  } catch (error) {
    console.error(error);
  }
};

//닉네임 중복체크
const checkNicknameAxios = async (data) => {
  const jsonData = JSON.stringify(data);
  try {
    const res = await http.post('user/me/edit', jsonData);

    return res;
  } catch (error) {
    console.error(error);
  }
};

//사용자 위치보내기
const homeAxios = async (data) => {
  const jsonData = JSON.stringify(data);
  try {
    const res = await http.post('home', jsonData);

    return res;
  } catch (error) {
    console.error(error);
  }
};

//회원 로그아웃
const logoutAxios = async () => {
  try {
    const res = await http.patch('logout');

    return res;
  } catch (error) {
    console.error(error);
  }
};

//나의 레시피글보기
const getMyBoardAxios = async () => {
  try {
    const res = await http.get('user/me/board');

    return res;
  } catch (error) {
    console.error(error);
  }
};
//나의 파티글 보기
const getMyPostAxios = async () => {
  try {
    const res = await http.get('user/me/community');

    return res;
  } catch (error) {
    console.error(error);
  }
};
//나의 댓글 보기
const getMyCommentAxios = async () => {
  try {
    const res = await http.get('user/me/comment');

    return res;
  } catch (error) {
    console.error(error);
  }
};
const userApi = {
  signupAxios,
  patchMyInfoAxios,
  checkNicknameAxios,
  homeAxios,
  logoutAxios,
  getMyBoardAxios,
  getMyPostAxios,
  getMyCommentAxios,
};
export default userApi;
