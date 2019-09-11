import {combineReducers} from 'redux';
import userReducer from './user/user-reducer.js';
import cartReducer from './cart/cart-reducers';

export default combineReducers({
    user: userReducer,
    cart: cartReducer
})