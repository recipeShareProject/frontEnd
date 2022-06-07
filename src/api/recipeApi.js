import http from 'api/http';
import {getCookie} from 'common/presenters/Cookie';
//설정
// http.defaults.headers['Content-Type'] = 'application/json';
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
  const formData = new FormData();
  formData.append('title', data.title);
  formData.append('category', data.category);
  formData.append('quantity', data.quantity);
  formData.append('cookTime', data.cookTime);
  data.completeImages.forEach((completeImage) =>
    formData.append('completeImages', completeImage),
  );

  try {
    const res = await http.post('board', formData, formConfig);
    const ingredient = await addIngredientAxios(data, res.data.id);
    const process = await addProcessAxios(data, res.data.id);

    const response = {res, ingredient, process};
    return response;
  } catch (error) {
    console.error(error);
  }
};

//재료 추가
const addIngredientAxios = async (data, recipeId) => {
  const sendData = {
    ingredient: data.ingredient,
    amount: data.amount,
  };
  const jsonData = JSON.stringify(sendData);

  try {
    const res = await http.post(
      `board/${recipeId}/ingredient`,
      jsonData,
      config,
    );
    return res;
  } catch (error) {
    console.error(error);
  }
};

//요리과정 추가
const addProcessAxios = async (data, recipeId) => {
  const formData = new FormData();
  formData.append('process', data.process);
  data.processImages.forEach((img) => formData.append('processImages', img));

  try {
    const res = await http.post('board', formData, formConfig);
    return res;
  } catch (error) {
    console.error(error);
  }
};

//레시피 한개 조회 에러나옴
const getRecipeAxios = async (boardId) => {
  try {
    const res = await http.get(`board/${boardId}`);
    return res;
  } catch (error) {
    console.error(error);
  }
};

//레시피 수정
const patchRecipeAxios = async (boardId, data) => {
  const formData = new FormData();
  formData.append('title', data.title);
  formData.append('category', data.category);
  formData.append('quantity', data.quantity);
  formData.append('cookTime', data.cookTime);
  data.completeImages.forEach((completeImage) =>
    formData.append('completeImages', completeImage),
  );

  try {
    const res = await http.patch(`board/${boardId}`, formConfig);
    const ingredient = await patchIngredientAxios(data, res.data.id);
    const process = await patchProcessAxios(data, res.data.id);

    const response = {res, ingredient, process};
    return response;
  } catch (error) {
    console.error(error);
  }
};
//재료 수정
const patchIngredientAxios = async (data, recipeId) => {
  const sendData = {
    ingredient: data.ingredient,
    amount: data.amount,
  };
  const jsonData = JSON.stringify(sendData);

  console.log(sendData);
  try {
    const res = await http.patch(
      `board/${recipeId}/ingredient`,
      jsonData,
      config,
    );
    return res;
  } catch (error) {
    console.error(error);
  }
};

//요리과정 수정
const patchProcessAxios = async (data, recipeId) => {
  const formData = new FormData();
  formData.append('process', data.process);
  data.processImages.forEach((img) => formData.append('processImages', img));

  try {
    const res = await http.patch('board', formData, formConfig);
    return res;
  } catch (error) {
    console.error(error);
  }
};
//레시피 삭제 에러나옴
const delRecipeAxios = async (boardId) => {
  try {
    const res = await http.delete(`board/${boardId}`, config);
    return res;
  } catch (error) {
    console.error(error);
  }
};

//재료 삭제
const delIngredientAxios = async (data, recipeId) => {
  const sendData = {
    ingredient: data.ingredient,
    amount: data.amount,
  };
  const jsonData = JSON.stringify(sendData);

  console.log(sendData);
  try {
    const res = await http.patch(
      `board/${recipeId}/ingredient`,
      jsonData,
      config,
    );
    return res;
  } catch (error) {
    console.error(error);
  }
};

//요리과정 삭제
const delProcessAxios = async (data, recipeId) => {
  const formData = new FormData();
  formData.append('process', data.process);
  data.processImages.forEach((img) => formData.append('processImages', img));

  try {
    const res = await http.patch('board', formData, formConfig);
    return res;
  } catch (error) {
    console.error(error);
  }
};

//리뷰 작성
const writeReviewAxios = async (boardId, data) => {
  const frm = new FormData();
  frm.append('comment', data.comment);
  frm.append('category', data.category);
  frm.append('images', data.images);

  try {
    const res = await http.post(`board/${boardId}/review`, frm, formConfig);
    return res;
  } catch (error) {
    console.error(error);
  }
};
//리뷰 수정 에러나옴
const patchReviewAxios = async (boardId, data) => {
  const frm = new FormData();
  frm.append('comment', data.comment);
  frm.append('category', data.category);
  frm.append('images', data.images);

  try {
    const res = await http.patch(`board/${boardId}/review`, formConfig);
    return res;
  } catch (error) {
    console.error(error);
  }
};

//리뷰 삭제 에러
const delReviewAxios = async (boardId) => {
  try {
    const res = await http.delete(`board/${boardId}/review`, config);
    return res;
  } catch (error) {
    console.error(error);
  }
};

//북마크 토글
const togglebookMarkAxios = async (postId) => {
  try {
    const res = await http.post(`board/${postId}/bookmark`, '', config);
    return res.data.bookmarkStatus;
  } catch (error) {
    console.error(error);
  }
};

const recipeApi = {
  getHomeAxios,
  getSearchResultAxios,
  addRecipeAxios,
  // getRecipeAxios,
  // delRecipeAxios,
  patchRecipeAxios,
  writeReviewAxios,
  delReviewAxios,
  // patchReviewAxios,
  togglebookMarkAxios,
};
export default recipeApi;
