import { EMAIL_CHANGED , PASS_CHANGED , LOGIN_OK , LOGIN_FAIL , LOGIN_USER , DUMP_LOGIN, UPDATE_CART ,ADD_TO_CART,DELETE_CART_ITEM } from './types';
import {AsyncStorage} from 'react-native';


export const addToCart = (product) => {
    return{
        type: ADD_TO_CART,
        payload: product
    };
};

export const updateCart = (id,unit) => {
    return{
        type: UPDATE_CART,
        id: id,
        unit: unit
    };
};

export const deleteCartItem = (cart) => {
    return{
        type: DELETE_CART_ITEM,
        payload:cart
    };
};


export const emailChange = (text) =>{

  return {
    type:EMAIL_CHANGED,
    payload:text
  };
}
export const passChange = (text)=>{

  return {
    type:PASS_CHANGED,
    payload:text
  }
}

export const tryDumpLogin = ({navigation,navigate}) => {

  return async (dispatch) =>{
    try {
      const value1 = await AsyncStorage.getItem('user');
      const value2 = await AsyncStorage.getItem('pass');

      if (value1 !== null && value2 !== null ) {
      dispatch({type:LOGIN_OK,payload:{ n:value3 , p:value2 , e:value1 , c:1 }});
        navigation.navigate('HOME');
      }else {
        dispatch({type:DUMP_LOGIN });
      }
    } catch (error) {
          dispatch({type:DUMP_LOGIN });
      }

  }
}

export const userLogin = ({email,pass,navigation,navigate}) => {

return async (dispatch) => {
  try {
    dispatch({type:LOGIN_USER});
   const url = 'http://daisyarea.com/api/login.php?phone_number='+email+'&password='+pass;
   fetch(url,
  {
      method: 'GET',
      headers:
      {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
      }
  }).then((response) => response.json()).then((text) =>
  {
    if ( text.success == 1 ){
      dispatch({type:LOGIN_OK,payload:{ p:pass , e:email}});
         navigation.navigate('Home');
    }else {
      dispatch({type:LOGIN_FAIL,payload:text.message})
    }
  }).catch(() =>
  {
    dispatch({type:LOGIN_FAIL,payload:'check your internet connection'})

  });
} catch (error) {
  dispatch({type:LOGIN_FAIL,payload:' try again please!!'})

}
}
}
