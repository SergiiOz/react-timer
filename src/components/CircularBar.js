import React from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const CircularBar = (props) => {
  const onFormatTime = (time) => {
    return time < 10 ? `0${time}` : `${time}`;
  };

  return (
    <div>
      <CircularProgressbar
        value={props.value}
        maxValue={60}
        text={onFormatTime(props.value)}
      />

      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        {props.nameValue}
      </div>
    </div>
  );
};

export default CircularBar;
