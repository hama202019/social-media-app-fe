import authReducer from '../reducers/authReducer'
import {combineReducers} from 'redux'

const allReducers = combineReducers(authReducer)

export default allReducers