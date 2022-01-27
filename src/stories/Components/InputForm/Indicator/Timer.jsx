import React, { useEffect, useState, useRef } from 'react';
import PropTypes from 'prop-types';
import './Indicator.css';

export const Timer = ({ time, setTime }) => {
  const [isRunning, setIsRunning] = useState(true);
  const savedCallback = useRef();

  const callback = () => {
    setTime(time - 1);
  };
  useEffect(() => {
    savedCallback.current = callback;
  });

  useEffect(() => {
    const tick = () => {
      savedCallback.current();
      console.log('tick');
    };
    let timer;
    if (isRunning) {
      timer = setInterval(tick, 1000);
    }

    return () => clearInterval(timer);
  }, [isRunning]);

  useEffect(() => {
    if (time == 0) {
      setIsRunning(false);
    }
  }, [time]);

  return (
    <div className="indicator">
      {parseInt(time / 60)}:{('00' + parseInt(time % 60)).slice(-2)}
    </div>
  );
};

Timer.propTypes = {};
