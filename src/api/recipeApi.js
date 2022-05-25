import http from 'api/http';

// const recipeApi = {
// getRecipe() {
//   return http({url: 'board/1', method: 'get'});
// },
// addRecipe(data) {
//   console.log(data);
//   // return http({url: 'board/1', method: 'post', data: data});
// },
// test() {
//   return http({url: '', method: 'get'});
// },
// };

//설정
// http.defaults.headers['Content-Type'] = 'application/json';
//   http.defaults.headers.common['Authorization'] =
//     sessionStorage.getItem('token');

// const jsonData = JSON.stringify(data);

//레시피 홈 목록 가져오기
const getHomeAxios = async () => {
  try {
    const res = await http.get('board');
    return res;
  } catch (error) {
    console.error(error);
  }
};
//레시피 검색
const getSearchResultAxios = async (data) => {
  const jsonData = JSON.stringify(data);
  try {
    const res = await http.post(`board/search`, jsonData);
    return res;
  } catch (error) {
    console.error(error);
  }
};

//레시피 추가
const addRecipeAxios = async (data) => {
  http.defaults.headers['Content-Type'] = 'multipart/form-data';

  const frm = new FormData();
  frm.append('title', data.title);
  // frm.append('category', data.category);
  // frm.append('quantity', data.quantity);
  // frm.append('cookTime', data.cookTime);
  // frm.append('ingredient', data.ingredient);
  // frm.append('process', data.process);
  frm.append('processImages', data.processImages);
  frm.append('completeImages', data.completeImages);
  // frm.append('user', data.user);

  try {
    const res = await http.post('board', frm);
    return res;
  } catch (error) {
    console.error(error);
  }
};

//레시피 한개 조회
const getRecipeAxios = async (boardId) => {
  try {
    const res = await http.get(`board/${boardId}`);
    return res;
  } catch (error) {
    console.error(error);
  }
};

//레시피 삭제
const delRecipeAxios = async (boardId) => {
  try {
    const res = await http.delete(`board/${boardId}`);
    return res;
  } catch (error) {
    console.error(error);
  }
};

//레시피 수정
const patchRecipeAxios = async (boardId, data) => {
  const frm = new FormData();
  frm.append('title', data.title);
  // frm.append('category', data.category);
  // frm.append('quantity', data.quantity);
  // frm.append('cookTime', data.cookTime);
  // frm.append('ingredient', data.ingredient);
  // frm.append('process', data.process);
  // frm.append('processImages', data.processImages);
  frm.append('completeImages', data.completeImages);
  // frm.append('user', data.user);
  try {
    const res = await http.patch(`board/${boardId}`);
    return res;
  } catch (error) {
    console.error(error);
  }
};

//리뷰 작성
const writeReviewAxios = async (boardId, data) => {
  const frm = new FormData();
  frm.append('comment', data.comment);
  // frm.append('like', data.category);
  frm.append('picture', data.picture);
  // frm.append('user', data.user);

  try {
    const res = await http.patch(`board/${boardId}/review`);
    return res;
  } catch (error) {
    console.error(error);
  }
};

//리뷰 삭제
const delReviewAxios = async (boardId) => {
  try {
    const res = await http.delete(`board/${boardId}/review`);
    return res;
  } catch (error) {
    console.error(error);
  }
};

//리뷰 수정
const patchReviewAxios = async (boardId, data) => {
  const frm = new FormData();
  frm.append('comment', data.comment);
  // frm.append('like', data.category);
  frm.append('picture', data.picture);
  // frm.append('user', data.user);

  try {
    const res = await http.patch(`board/${boardId}/review`);
    return res;
  } catch (error) {
    console.error(error);
  }
};

//북마크 추가
const addBookMarkAxios = async (data) => {
  const jsonData = JSON.stringify(data);

  try {
    const res = await http.post('board/bookmark', jsonData);
    return res;
  } catch (error) {
    console.error(error);
  }
};

//북마크 삭제
const delBookMarkAxios = async (data) => {
  const jsonData = JSON.stringify(data);

  try {
    const res = await http.delete('board/bookmark', jsonData);
    return res;
  } catch (error) {
    console.error(error);
  }
};
const recipeApi = {
  getHomeAxios,
  getSearchResultAxios,
  addRecipeAxios,
  getRecipeAxios,
  delRecipeAxios,
  patchRecipeAxios,
  writeReviewAxios,
  delReviewAxios,
  patchReviewAxios,
  addBookMarkAxios,
  delBookMarkAxios,
};
export default recipeApi;
