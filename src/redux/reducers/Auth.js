import {SET_AUTH_USER} from 'constants/ActionTypes';

//Todo : sample code
const INIT_STATE = {
  authUser: null,
};

const Auth = (state = INIT_STATE, action) => {
  switch (action.type) {
    case SET_AUTH_USER: {
      return {
        ...state,
        authUser: action.payload,
      };
    }

    default:
      return state;
  }
};
export default Auth;
