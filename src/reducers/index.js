import authReducer from './auth';
import cartReducer from './cart';
import adminReducer from './admin';
import messageReducer from './messageReducer'
import resultReducer from './resultReducer'
import {combineReducers} from 'redux';

const allReducer=combineReducers({
    authReducer:authReducer,
    cartReducer:cartReducer,
    adminReducer:adminReducer,
    resultReducer:resultReducer,
    messageReducer:messageReducer
})

export default allReducer