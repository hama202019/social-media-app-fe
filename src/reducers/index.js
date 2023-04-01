import authReducer from '../reducers/authReducer'
import {combineReducers} from 'redux'
import postsReducer from './postsReducer'

const allReducers = combineReducers({authReducer, postsReducer})

export default allReducers