import { combineReducers } from 'redux';

import cookieReducer from './cookie/cookieReducers';
import puddingReducer from './pudding/puddingReducers';
import userReducer from './user/userReducers';

const rootReducer = combineReducers({
  cookie: cookieReducer,
  pudding: puddingReducer,
  user: userReducer
})

export default rootReducer;