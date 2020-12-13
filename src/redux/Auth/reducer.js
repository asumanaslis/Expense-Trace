import { LOGIN_START, LOGIN_SUCCESS, LOGIN_FAILED, REGISTER_START, REGISTER_SUCCESS, REGISTER_FAILED } from './types';

const INITIAL_STATE = {
  isAuth: false,
  loading: false
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case REGISTER_START:
      return {
        ...state,
        isAuth: action.payload,
        loading: true,
      };
    case REGISTER_SUCCESS:
      return {
        ...state,
        isAuth: true,
        loading: false
      };
    case REGISTER_FAILED:
      return {
        ...state,
        isAuth: false,
        loading: false
      };
    case LOGIN_START:
      return {
        ...state,
        isAuth: action.payload,
        loading: true,
        isAuth: false
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        isAuth: true
      };
    case LOGIN_FAILED:
      return {
        ...state,
        loading: false,
        isAuth: false
      };
    default:
      return state;
  }
};
