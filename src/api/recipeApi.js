import instance from 'api/instance';
import http from './http';

const recipeApi = {
  getRecipe() {
    return instance({url: '/board/1', method: 'get'});
  },
  addRecipe(data) {
    return instance({url: '/board/1', method: 'post', data: data});
  },
  test() {
    return instance({url: '', method: 'get'});
  },
};

export default recipeApi;
