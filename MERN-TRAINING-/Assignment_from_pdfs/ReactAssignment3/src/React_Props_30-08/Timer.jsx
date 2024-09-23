// Q6.  Create a `Timer` component that accepts a `start` prop to set the initial time in seconds. Use `useState` to manage the timer's state and display the current time

import React, { useState, useEffect } from 'react';

const Timer = ({ start }) => {
  const [time, setTime] = useState(start);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(prevTime => prevTime - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h1>Time: {time} seconds</h1>
    </div>
  );
};

export default Timer;
