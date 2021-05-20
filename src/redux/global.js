import  auth from './auth'
import todo from './todo'
import repos from './repo'
import chat from './chat'

import {combineReducers ,createStore} from 'redux'
const reducer = combineReducers({auth,todo,repos,chat})

export const store = createStore(reducer)
