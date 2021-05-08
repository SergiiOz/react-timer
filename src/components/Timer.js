import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  incrSec,
  decrSec,
  incrMin,
  decrMin,
  resetTime,
  isRunningOn,
  isRunningOff,
} from '../actions/actionCreators';
// import ChartRadial from './ChartRadial';
// import ChartRadial2 from './ChartRadial2';
import CircularBar from './CircularBar';
import SetTime from './SetTime';

const Timer = () => {
  //set function setInterval
  const [intervalId, setIntervalId] = useState(null);
  //replaced mapStateToProps to useSelector()
  const isRunning = useSelector((state) => state.timer.isRunning);
  const seconds = useSelector((state) => state.timer.seconds);
  //replaced mapDispatchToProps to useDispatch()
  const dispatch = useDispatch();

  //START TIMER
  const onStartTimer = () => {
    let timerID = setInterval(() => {
      dispatch(decrSec());
    }, 1000);

    setIntervalId(timerID);
    //change isRunning to true
    dispatch(isRunningOn());
  };

  //STOP TIMER
  const onStopTimer = () => {
    clearInterval(intervalId);
    setIntervalId(null);
    //change isRunning to false
    dispatch(isRunningOff());
  };

  //convert in minutes and second from get seconds
  const onGetMinutesAndSeconds = (time) => {
    const getSeconds = time % 60;
    const getMinutes = Math.floor(time / 60);
    return { getMinutes, getSeconds };
  };

  //stop timer when second left 0
  if (seconds === 0 && isRunning === true) {
    clearInterval(intervalId);
    //change status isRunning to false
    dispatch(isRunningOff());
  }

  const { getSeconds, getMinutes } = onGetMinutesAndSeconds(seconds);

  return (
    <div>
      {/* display circle diagram */}
      <div className="charts">
        {/* <ChartRadial
          sizeCircle={getMinutes * 3}
          className="minutes"
          fillColor="blue"
        />
        <ChartRadial
          sizeCircle={getSeconds}
          className="seconds"
          fillColor="green"
        />

        <ChartRadial2 sizeCircle={getSeconds} /> */}

        <CircularBar value={getMinutes} nameValue="minutes" />
        <CircularBar value={getSeconds} nameValue="seconds" />
      </div>

      {/* BUTTONS SET TIME*/}
      {/* set minutes */}
      <SetTime
        nameValue="minutes"
        value={getMinutes}
        increment={() => dispatch(incrMin())}
        decrement={getMinutes > 0 ? () => dispatch(decrMin()) : undefined}
      />
      {/* set seconds */}
      <SetTime
        nameValue="seconds"
        value={getSeconds}
        increment={() => dispatch(incrSec())}
        decrement={getSeconds > 0 ? () => dispatch(decrSec()) : undefined}
      />

      {/* run, stop, reset timer */}
      <div>
        <button disabled={isRunning === true} onClick={onStartTimer}>
          Start
        </button>
        <button disabled={isRunning === false} onClick={onStopTimer}>
          Stop
        </button>
        <button onClick={() => dispatch(resetTime())}>RESET</button>
      </div>
    </div>
  );
};

export default Timer;
