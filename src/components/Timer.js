import React, { useState } from 'react';
import { connect } from 'react-redux';
import {
  incrSec,
  decrSec,
  incrMin,
  decrMin,
  resetTime,
  isRunningOn,
  isRunningOff,
} from '../actions/actionCreators';
import ChartRadial from './ChartRadial';

const Timer = (props) => {
  //set function setInterval
  const [intervalId, setIntervalId] = useState(null);

  //START TIMER
  const onStartTimer = () => {
    let timerID = setInterval(() => {
      props.onDecrSec();
    }, 1000);

    setIntervalId(timerID);
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

  //convert in minutes and second from get seconds
  const onGetMinutesAndSeconds = (time) => {
    const getSeconds = time % 60;
    const getMinutes = Math.floor(time / 60);
    return { getMinutes, getSeconds };
  };

  const onFormatTime = (time) => {
    return time < 10 ? `0${time}` : `${time}`;
  };

  //stop timer when second left 0
  if (props.seconds === 0 && props.isRunning === true) {
    clearInterval(intervalId);
    //******************************/
    //I will need to add: isRunning Off
    //****************************/
  }

  const { getSeconds, getMinutes } = onGetMinutesAndSeconds(props.seconds);

  return (
    <div>
      {/* display circle diagram */}
      <div className="charts">
        <ChartRadial
          sizeCircle={getMinutes * 3}
          className="minutes"
          fillColor="blue"
        />
        <ChartRadial
          sizeCircle={getSeconds}
          className="seconds"
          fillColor="green"
        />
      </div>
      <div>
        {/* display time */}
        <span>{onFormatTime(getMinutes)}</span> :{' '}
        <span>{onFormatTime(getSeconds)}</span>
      </div>

      {/* SET TIME*/}
      {/* set minutes */}
      <div>
        <button onClick={props.onIncrMin}>Incr Minutes</button>
        <button onClick={props.onDecrMin}>Decr Minutes</button>
      </div>

      {/* set seconds */}
      <div>
        <button onClick={props.onIncrSec}>Incr Seconds</button>
        <button onClick={props.onDecrSec}>Decr Seconds</button>
      </div>

      {/* run, stop, reset timer */}
      <div>
        <button disabled={props.isRunning === true} onClick={onStartTimer}>
          Start
        </button>
        <button disabled={props.isRunning === false} onClick={onStopTimer}>
          Stop
        </button>
        <button onClick={props.onResetTime}>RESET</button>
      </div>
    </div>
  );
};

//Map STATE
const mapStateToProps = (state) => {
  return {
    seconds: state.timer.seconds,
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
    onResetTime: () => dispatch(resetTime()),
    isRunOn: () => dispatch(isRunningOn()),
    isRunOff: () => dispatch(isRunningOff()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Timer);
