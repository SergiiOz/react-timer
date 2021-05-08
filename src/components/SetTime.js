import React from 'react';

const SetTime = ({ nameValue, value, increment, decrement }) => {
  const onFormatTime = (time) => {
    return time < 10 ? `0${time}` : `${time}`;
  };

  return (
    <div>
      <div>{nameValue}</div>
      <button onClick={increment}>+</button>
      <span>{onFormatTime(value)}</span>
      <button onClick={decrement}>-</button>
    </div>
  );
};

export default SetTime;
