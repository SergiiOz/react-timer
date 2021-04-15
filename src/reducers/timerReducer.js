import {
  INCREMENT_SECONDS,
  DECREMENT_SECONDS,
  INCREMENT_MINUTES,
  DECREMENT_MINUTES,
} from '../actions/actionTypes';

const initialState = {
  seconds: 5,
  minutes: 3,
};

const timerReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT_SECONDS:
      return { ...state, seconds: state.seconds + 1 };

    case DECREMENT_SECONDS:
      return { ...state, seconds: state.seconds - 1 };

    case INCREMENT_MINUTES:
      return { ...state, minutes: state.minutes + 1 };

    case DECREMENT_MINUTES:
      return { ...state, minutes: state.minutes - 1 };

    default:
      return state;
  }
};

export default timerReducer;
