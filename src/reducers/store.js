import timerReducer from './timerReducer';
import { createStore, combineReducers } from 'redux';

let rootReducer = combineReducers({
  // our state
  timer: timerReducer,
});

let store = createStore(rootReducer);

//it for display info in console
//example write in console: console.log(store.getState())
window.store = store;

export default store;
