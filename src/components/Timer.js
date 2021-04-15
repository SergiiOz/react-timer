import React from 'react';
import { connect } from 'react-redux';
import { incrSec, decrSec, incrMin, decrMin } from '../actions/actionCreators';

const Timer = (props) => {
  return (
    <div>
      <div>
        {/* show time */}
        <span>{props.minutes}</span> : <span>{props.seconds}</span>
      </div>

      {/* set time */}
      <button onClick={props.onIncrSec}>IncrSeconds</button>
      <button onClick={props.onDecrSec}>DecrSeconds</button>
      <button onClick={props.onIncrMin}>IncrMinures</button>
      <button onClick={props.onDecrMin}>DecrMinutes</button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    seconds: state.timer.seconds,
    minutes: state.timer.minutes,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onIncrSec: () => dispatch(incrSec()),
    onDecrSec: () => dispatch(decrSec()),
    onIncrMin: () => dispatch(incrMin()),
    onDecrMin: () => dispatch(incrMin()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Timer);
