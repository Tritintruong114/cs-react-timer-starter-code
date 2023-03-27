import { formatTime } from "./formatTime";
import useTimer from "./useTimer";
import { useState } from "react";

function App() {
  const { time, startTimer, stopTimer, resetTimer, active,  } = useTimer(0);
  const [splitSave, setSplitSave] = useState([]);


  const split = () => {
   setSplitSave(formatTime(time));
  }

  return (
    <div className="flex flex-col gap-3 h-screen w-screen items-center justify-center">
      <div className="w-2/4  text-center text-3xl md:text-6xl xl:text-9xl font-bold text-rose-500  flex justify-center items-center">
        <h1>Code Time</h1>
      </div>
  
      
      <div className="w-1/4 gap-4  text-center justify-center flex flex-col">
        
        <div className="text-xl font-medium md:text-3xl xl:text-6xl">
          <p>{formatTime(time)}</p>
        </div>

          <div className="flex gap-2 justify-center items-center">
          {time > 0 && time &&
            <button button className="text-center font-light  bg-red-400 rounded-full px-3 py-1 md:px-6 xl:px-6  text-md md:text-lg xl:text-3xl" onClick={stopTimer}>
              Stop
            </button>}
          { time === 0 && 
            <button className="text-center font-light  bg-green-400 rounded-full px-3 py-1 md:px-6  xl:px-6 text-md md:text-lg xl:text-3xl"  ref={active} onClick={startTimer}>
            Start
            </button>}
          
          { time > 0 && 
            <button className="text-center font-light  bg-yellow-400 rounded-full px-3 py-1 md:px-6 xl:px-6 text-md md:text-lg xl:text-3xl"  onClick={resetTimer}>
            Reset
            </button>}
        </div>
        <div>
          <button onClick={split} >Split</button>
         
          <ul> 
              {splitSave}
          </ul>
          


        </div>
      </div>
    </div>
  );
}

export default App;