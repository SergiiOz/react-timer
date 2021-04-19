import {
  INCREMENT_SECONDS,
  DECREMENT_SECONDS,
  INCREMENT_MINUTES,
  DECREMENT_MINUTES,
  RESET_TIME,
  IS_RUNNING_ON,
  IS_RUNNING_OFF,
} from '../actions/actionTypes';

const initialState = {
  seconds: 0,
  isRunning: false,
};

const timerReducer = (state = initialState, action) => {
  switch (action.type) {
    //set time
    case INCREMENT_SECONDS:
      return { ...state, seconds: state.seconds + 1 };

    case DECREMENT_SECONDS:
      return { ...state, seconds: state.seconds - 1 };

    case INCREMENT_MINUTES:
      return { ...state, seconds: state.seconds + 60 };

    case DECREMENT_MINUTES:
      return { ...state, seconds: state.seconds - 60 };

    //change isRunning
    case IS_RUNNING_ON:
      return { ...state, isRunning: true };

    case IS_RUNNING_OFF:
      return { ...state, isRunning: false };

    //reset
    case RESET_TIME:
      return { ...state, seconds: 0, isRunning: false };
    default:
      return state;
  }
};

export default timerReducer;
