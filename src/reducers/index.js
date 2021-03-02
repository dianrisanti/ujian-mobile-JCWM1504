import {combineReducers} from 'redux'
import userReducer from './userReducer'
import dataReducer from './dataReducer'

const allReducers = combineReducers({
    userReducer,
    dataReducer
})

export default allReducers