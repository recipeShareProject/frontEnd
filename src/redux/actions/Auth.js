import { SET_AUTH_USER } from "constants/ActionTypes";

//Todo : sample code
export const setAuthUser = (user) => {
  return (dispatch) => {
    dispatch({
      type: SET_AUTH_USER,
      payload: user,
    });
  };
};
