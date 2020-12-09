import {combineReducers} from 'redux';

import AuthReducers from './Auth/reducer';

export default combineReducers({
  auth: AuthReducers,
});
