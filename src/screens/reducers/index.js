import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import CartReducer from './CartReducer';

export default combineReducers ({
  kkkk : () => [] ,
  auth : AuthReducer,
  cart : CartReducer
});
