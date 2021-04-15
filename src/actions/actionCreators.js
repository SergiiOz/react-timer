import {
  INCREMENT_SECONDS,
  DECREMENT_SECONDS,
  INCREMENT_MINUTES,
  DECREMENT_MINUTES,
} from '../actions/actionTypes';

export const incrSec = () => ({ type: INCREMENT_SECONDS });
export const decrSec = () => ({ type: DECREMENT_SECONDS });
export const incrMin = () => ({ type: INCREMENT_MINUTES });
export const decrMin = () => ({ type: DECREMENT_MINUTES });
