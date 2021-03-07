import { combineReducers } from 'redux';

import cookieReducer from './cookie/cookieReducers';
import puddingReducer from './pudding/puddingReducers';

const rootReducer = combineReducers({
  cookie: cookieReducer,
  pudding: puddingReducer
})

export default rootReducer;