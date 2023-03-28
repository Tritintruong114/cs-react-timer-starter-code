import { formatTime } from "./formatTime";
import useTimer from "./useTimer";
import { useState } from "react";

function App() {
  const { time, startTimer, stopTimer, resetTimer, active, splitTime, split } =
    useTimer(0);

  return (
    <div className="flex flex-col md:flex-col xl:flex-col gap-3 h-screen w-screen items-center justify-center">
      <div className="w-2/4 md:w-2/4 xl:w-2/4  text-center text-3xl md:text-6xl xl:text-9xl font-medium text-rose-500  flex justify-center items-center">
        <h1>Code Time</h1>
      </div>

      <div className="w-1/4 gap-4  text-center justify-center flex flex-col">
        <div className="text-xl font-medium md:text-3xl xl:text-6xl">
          <p className="text-rose-600 font-bold">{formatTime(time)}</p>
        </div>

        <div className="flex  flex-col md:flex-row xl:flex-row gap-2 justify-center items-center">
          {time > 0 && time && (
            <button
              button
              className="text-center font-light active:bg-rose-700   bg-red-400 rounded-full px-3 py-1 md:px-6 xl:px-6  text-md md:text-lg xl:text-3xl"
              onClick={stopTimer}
            >
              Stop
            </button>
          )}

          <button
            className="text-center font-light  bg-green-400 rounded-full px-3 py-1 md:px-6  xl:px-6 text-md md:text-lg xl:text-3xl"
            ref={active}
            onClick={startTimer}
          >
            Start
          </button>

          {time > 0 && (
            <button
              className="text-center font-light  bg-yellow-400 rounded-full px-3 py-1 md:px-6 xl:px-6 text-md md:text-lg xl:text-3xl"
              onClick={resetTimer}
            >
              Reset
            </button>
          )}
        </div>
        {time !== 0 && (
          <div className="flex flex-col w-full justify-around items-center">
            <button
              className="text-center font-light  bg-purple-500 rounded-full px-3 py-1 md:px-6 xl:px-6 text-md md:text-lg xl:text-3xl"
              onClick={split}
            >
              Split
            </button>
            <div>
              {splitTime.map((element, index) => {
                return (
                  <li
                    className="flex text-xs md:text-xs xl:text-xs"
                    key={index}
                  >
                    {element}
                  </li>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
