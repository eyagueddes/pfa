import { SET_ALERT, REMOVE_ALERT } from '../actions/types';

const initialState = [];

 function alertReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case SET_ALERT:
      return [...state, payload];
    case REMOVE_ALERT:
      return state.filter((alert) => alert.id !== payload);//return all alerts except for the one that matches the payload
    default:
      return state;
  }
}

export default alertReducer;