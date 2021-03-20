import uuid from'uuid';
import { SET_ALERT, REMOVE_ALERT } from './types';
export const setAlert = (msg, alertType, timeout = 5000) => dispatch => {


    const id = uuid.v4();//to get random universal //VERSION4
    dispatch({// create action
      type: SET_ALERT,//to resolve the type
      payload: { msg, alertType, id }//send a payload  
    });
  
    setTimeout(() => dispatch({ type: REMOVE_ALERT, payload: id }), timeout);
  };