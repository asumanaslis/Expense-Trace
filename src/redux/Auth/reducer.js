import {LOGIN_START, LOGIN_SUCCESS, LOGIN_FAILED} from './types';

const INITIAL_STATE = {
  isAuth: false,
  loading: false,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOGIN_START:
      return {
        ...state,
        isAuth: action.payload,
        loading: true,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    case LOGIN_FAILED:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};
