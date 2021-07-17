import { SET_ALERT, REMOVE_ALERT } from '../actions/types';

const initialState = [];
<<<<<<< HEAD

function alertReducer(state = initialState, action) {
=======
 
 function alertReducer(state = initialState, action) {
>>>>>>> e37222ed0fbc56feaef64eb4097374fcfeadfe54
  const { type, payload } = action;

  switch (type) {
    case SET_ALERT:
      return [...state, payload];
    case REMOVE_ALERT:
<<<<<<< HEAD
      return state.filter((alert) => alert.id !== payload);
=======
      return state.filter((alert) => alert.id !== payload);//return all alerts except for the one that matches the payload
>>>>>>> e37222ed0fbc56feaef64eb4097374fcfeadfe54
    default:
      return state;
  }
}

export default alertReducer;