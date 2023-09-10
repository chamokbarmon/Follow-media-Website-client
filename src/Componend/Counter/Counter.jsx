import React, { useState, useEffect } from "react";
import Countdown from "react-countdown";

const Counter = () => {
 
  const initialHours = 24;
  const initialMinutes = 0;
  const initialSeconds = 0;

  const [hours, setHours] = useState(initialHours);
  const [minutes, setMinutes] = useState(initialMinutes);
  const [seconds, setSeconds] = useState(initialSeconds);

  useEffect(() => {
    const interval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      } else {
        if (minutes > 0) {
          setMinutes(minutes - 1);
          setSeconds(59);
        } else {
          if (hours > 0) {
            setHours(hours - 1);
            setMinutes(59);
            setSeconds(59);
          }
        }
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [hours, minutes, seconds]);

  const renderer = () => {
    return (
      <div>
        <div>
          <div>
      <div>
        <div className="container grid grid-flow-col gap-10 mb-10 text-center auto-cols-max justify-center mx-auto">
         
          <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
            <span className="countdown font-mono text-5xl">
             15
            </span>
            Days
          </div>
          <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
            <span className="countdown font-mono text-5xl">
            {hours}
            </span>
            hours
          </div>
          <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
            <span className="countdown font-mono text-5xl">
            {minutes}
            </span>
            min
          </div>
          <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
            <span className="countdown font-mono text-5xl">
            {seconds}
            </span>
            sec
          </div>
        </div>
      </div>
    </div>
    </div>
      </div>
    );
  };

  return (
    <div>
      <Countdown
        date={Date.now() + 10000}
        intervalDelay={0}
        precision={3}
        renderer={renderer}
      />
    </div>
  );
};

export default Counter;




