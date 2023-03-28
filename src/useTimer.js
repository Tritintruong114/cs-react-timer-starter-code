import { useState, useRef } from "react";
import { formatTime } from "./formatTime";

const useTimer = (ini = 0) => {
  const [time, setTime] = useState(0);
  const [splitTime, setSplitTime] = useState([]);

  const isStart = useRef(true); // this is initalvalue is boolean
  const active = useRef(false); // this is initalvalue is undefined
  const refInterval = useRef(0); // this is initalvalue is a number
  const timerOn = useRef(false); // this is initalvalue is undefined

  const split = () => {
    setSplitTime((current) => [...current, formatTime(time)]);
    console.log(splitTime);
  };
  const startTimer = () => {
    // console.log(active.current)
    timerOn.current = true; //this is for render the Stop and Reset when timer on
    console.log(timerOn, "checking timer");
    active.current.disabled = true; //this is for active the timer
    isStart.current = true;
    refInterval.current = setInterval(() => {
      if (isStart.current) {
        setTime((time) => time + 1);
      }
    }, 1000);
  };
  const stopTimer = () => {
    // active.current.disabled = false;
    timerOn.current = false; //this is for render the Start button when we stop
    isStart.current = false;
    clearInterval(refInterval.current);
  };
  const resetTimer = () => {
    active.current = false;
    setTime(0);
    setSplitTime([]);
    clearInterval(refInterval.current);
    timerOn.current = false; //this is for reset timer
  };

  return {
    time,
    startTimer,
    stopTimer,
    resetTimer,
    active,
    timerOn,
    splitTime,
    split,
  };
};
export default useTimer;
