<<<<<<< HEAD
import { combineReducers } from 'redux';
import alert from './alert';
import auth from './auth';
import profile from './profile';
import post from './post';

export default combineReducers({
  alert,
  auth,
  profile,
  post
=======
  
import { combineReducers } from 'redux';
import alert from'./alert';
import auth from './auth';
import profile from './profile';

export default combineReducers({
    alert,
    auth,profile
>>>>>>> e37222ed0fbc56feaef64eb4097374fcfeadfe54
});