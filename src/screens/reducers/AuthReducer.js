import { EMAIL_CHANGED , PASS_CHANGED , LOGIN_OK , LOGIN_FAIL ,LOGIN_USER, DUMP_LOGIN  } from '../actions/types';

const INIT = {
  email: '',
  pass:'',
  loading:false,
  ok:false,
  error:'',
  dump:true,
};


export default ( state = INIT , action ) => {

  switch (action.type) {
    case EMAIL_CHANGED:
    return { ...state , email:action.payload};
    case PASS_CHANGED:
    return {...state , pass:action.payload};
    case LOGIN_OK:
    return { ...state  , email:action.payload.e, pass:action.payload.p,
        error:'' , loading:false , ok:true , dump:false ,
      }
    case LOGIN_FAIL:
    return { ...state , error:action.payload , pass:'', loading:false  , email:'', dump:false }
    case LOGIN_USER:
    return { ...state , loading:true , error:'', dump:false  , dump_ok:false}
    case DUMP_LOGIN:
    return { ...state , dump:false , pass:'',email:'' }
    default:
    return state ;

  }
}
