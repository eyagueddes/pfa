<<<<<<< HEAD
=======
/*React is a JavaScript library for building user interfaces.
React is used to build single page applications.
React allows us to create reusable UI components.*/
>>>>>>> e37222ed0fbc56feaef64eb4097374fcfeadfe54
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const initialState = {};

const middleware = [thunk];

const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);
<<<<<<< HEAD

export default store ; 
=======
export default store
>>>>>>> e37222ed0fbc56feaef64eb4097374fcfeadfe54
