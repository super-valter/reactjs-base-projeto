import { combineReducers } from 'redux';

import exampleReducer from './examlpe/reducer';

export default combineReducers({
  // exampleReducer,
  example: exampleReducer,
});
