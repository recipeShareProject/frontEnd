export const getToken = () => {
  if (typeof window === undefined) {
    return null;
  }

  //Todo : auth 토큰 이름 지정
  return localStorage.getItem('token');
};
