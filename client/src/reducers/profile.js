<<<<<<< HEAD
import { GET_PROFILE, PROFILE_ERROR,CLEAR_PROFILE,UPDATE_PROFILE, GET_PROFILES } from "../actions/types";

const initialState = {
    profile:null,
    profiles : [],
    repos : [],
    loading : true,
    error:{}
}

export default function (state = initialState,action){
    const { type,payload} = action;
    switch (type){
        case GET_PROFILE:
        case UPDATE_PROFILE:
            return {
                ...state,
                profile:payload,
                loading:false
            };
        case GET_PROFILES : 
            return {
                ...state,
                profiles:payload,
                loading:false
            }
        case PROFILE_ERROR:
            return {
                ...state,
                error:payload,
                loading:false
            };
        case CLEAR_PROFILE:
            return {
                ...state,
                profile:null,
                repos: [],
                loading:false
            }

        default:
            return state; 
    }   

=======
import {
    GET_PROFILE,
    PROFILE_ERROR,
    CLEAR_PROFILE,
    UPDATE_PROFILE,
    GET_PROFILES,
    GET_REPOS,
    NO_REPOS
  } from '../actions/types';
  
  const initialState = {
    profile: null,
    profiles: [],
    repos: [],
    loading: true,
    error: {}
  };
  
 export default function (state = initialState, action) {
    const { type, payload } = action;
  
    switch (type) {
      case GET_PROFILE:
      case UPDATE_PROFILE:
        return {
          ...state,//current state
          profile: payload,
          loading: false
        };
      case GET_PROFILES:
        return {
          ...state,
          profiles: payload,
          loading: false
        };
      case PROFILE_ERROR:
        return {
          ...state,
          error: payload,
          loading: false,
          profile: null
        };
        case CLEAR_PROFILE:
            return{
                ...state,
                profile:null,
                repos:[],
                loading:false,


            };
        default:
            return state;
    }
>>>>>>> e37222ed0fbc56feaef64eb4097374fcfeadfe54
}