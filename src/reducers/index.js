import authReducer from '../reducers/authReducer'
import {combineReducers} from 'redux'
import postsReducer from './postsReducer'
import chatsReducer from './chatsReducer'

const allReducers = combineReducers({authReducer, postsReducer, chatsReducer})

export default allReducers