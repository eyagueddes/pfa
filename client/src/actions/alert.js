import { v4 as uuidv4 } from 'uuid';
<<<<<<< HEAD
=======

>>>>>>> e37222ed0fbc56feaef64eb4097374fcfeadfe54
import { SET_ALERT, REMOVE_ALERT } from './types';

export const setAlert = (msg, alertType, timeout = 5000) => dispatch => {
  const id = uuidv4();
  dispatch({
    type: SET_ALERT,
    payload: { msg, alertType, id }
  });

  setTimeout(() => dispatch({ type: REMOVE_ALERT, payload: id }), timeout);
};