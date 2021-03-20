import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  ACCOUNT_DELETED
} from '../actions/types';

const initialState = {
    token: localStorage.getItem('token'),//to store token
    isAuthenticated: null,//if succeded auth:true
    loading: true,
    user: null//no info for user before auth
  };
  export default function (state = initialState, action) {
    const { type, payload } = action;
  
    switch (type) {
     
      case REGISTER_SUCCESS:
     localStorage.setItem('token',payload.token);////if register succeeded we set the token
        return {
          ...state,
          ...payload,
          isAuthenticated: true,
          loading: false
        }
        case REGISTER_FAIL:
            localStorage.removeItem('token');
            return{
                ...state,
                token:null,
                isAuthenticated:false,
                loading:false
            }
            default:
                return state;
        }
    }