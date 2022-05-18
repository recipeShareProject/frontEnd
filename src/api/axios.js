import axios from 'axios';

//인스턴스 생성
const apiClicent = axios.create({
  baseURL: process.env.REACT_APP_API_HOST,
});

export default apiClicent;
