import  auth from './auth'
import todo from './todo'
import {combineReducers ,createStore} from 'redux'
const reducer = combineReducers({auth,todo})

export const store = createStore(reducer)
