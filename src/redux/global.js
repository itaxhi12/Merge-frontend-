import  auth from './auth'
import todo from './todo'
import repos from './repo'

import {combineReducers ,createStore} from 'redux'
const reducer = combineReducers({auth,todo,repos})

export const store = createStore(reducer)
