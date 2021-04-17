import React, { useState } from 'react';
import { connect } from 'react-redux';
import {
  incrSec,
  decrSec,
  incrMin,
  decrMin,
  isRunningOn,
  isRunningOff,
} from '../actions/actionCreators';

const Timer = (props) => {
  console.log(props);

  const [intervalId, setIntervalId] = useState(null);

  //START TIMER
  const onStartTimer = () => {
    let startTimer = setInterval(() => {
      props.onDecrSec();
    }, 1000);

    setIntervalId(startTimer);
    //change isRunning = true
    props.isRunOn();
  };

  //STOP TIMER
  const onStopTimer = () => {
    clearInterval(intervalId);
    setIntervalId(null);
    //change isRunning = false
    props.isRunOff();
  };

  const pad = (time) => {
    return time < 10 ? `0${time}` : `${time}`;
  };

  return (
    <div>
      <div>
        {/* show time */}
        <span>{pad(props.minutes)}</span> : <span>{pad(props.seconds)}</span>
      </div>

      {/* set time */}
      <div>
        <button onClick={props.onIncrSec}>IncrSeconds</button>
        <button onClick={props.onDecrSec}>DecrSeconds</button>
        <button onClick={props.onIncrMin}>IncrMinures</button>
        <button onClick={props.onDecrMin}>DecrMinutes</button>
      </div>
      <div>
        <button disabled={props.isRunning === true} onClick={onStartTimer}>
          Start
        </button>
        <button onClick={onStopTimer}>Stop</button>
      </div>
    </div>
  );
};

//Map STATE
const mapStateToProps = (state) => {
  return {
    seconds: state.timer.seconds,
    minutes: state.timer.minutes,
    isRunning: state.timer.isRunning,
  };
};

//Map DISPATCH
const mapDispatchToProps = (dispatch) => {
  return {
    onIncrSec: () => dispatch(incrSec()),
    onDecrSec: () => dispatch(decrSec()),
    onIncrMin: () => dispatch(incrMin()),
    onDecrMin: () => dispatch(decrMin()),
    isRunOn: () => dispatch(isRunningOn()),
    isRunOff: () => dispatch(isRunningOff()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Timer);
