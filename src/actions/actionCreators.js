import {
  INCREMENT_SECONDS,
  DECREMENT_SECONDS,
  INCREMENT_MINUTES,
  DECREMENT_MINUTES,
  RESET_TIME,
  IS_RUNNING_ON,
  IS_RUNNING_OFF,
} from '../actions/actionTypes';

export const incrSec = () => ({ type: INCREMENT_SECONDS });
export const decrSec = () => ({ type: DECREMENT_SECONDS });
export const incrMin = () => ({ type: INCREMENT_MINUTES });
export const decrMin = () => ({ type: DECREMENT_MINUTES });
export const resetTime = () => ({ type: RESET_TIME });
export const isRunningOn = () => ({ type: IS_RUNNING_ON });
export const isRunningOff = () => ({ type: IS_RUNNING_OFF });
