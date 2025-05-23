import React, { useEffect, useRef, useState } from 'react';
import './timer.css';

const MAX_SECONDS = 3600; // 60 minutes

const Timer = ({ running, reset, onTimeout }) => {
  const [seconds, setSeconds] = useState(0);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (running) {
      intervalRef.current = setInterval(() => {
        setSeconds((s) => {
          if (s + 1 >= MAX_SECONDS) {
            clearInterval(intervalRef.current);
            intervalRef.current = null;
            if (onTimeout) onTimeout();
            return 0; // Reset to 0 for new game
          }
          return s + 1;
        });
      }, 1000);
    } else if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    return () => clearInterval(intervalRef.current);
  }, [running, onTimeout]);

  useEffect(() => {
    setSeconds(0);
  }, [reset]);

  const format = (s) => {
    const m = Math.floor(s / 60);
    const sec = s % 60;
    return `${m.toString().padStart(2, '0')}:${sec.toString().padStart(2, '0')}`;
  };

  return (
    <div className="timer-fp">
      <span role="img" aria-label="timer">⏱️</span> {format(seconds)}
    </div>
  );
};

export default Timer;
