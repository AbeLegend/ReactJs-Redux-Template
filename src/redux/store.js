import { createStore } from 'redux'
import cookieReducer from './cookie/cookieReducers'

const store = createStore(cookieReducer)

export default store
