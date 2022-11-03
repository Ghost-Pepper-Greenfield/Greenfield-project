import React, { useState, useEffect } from "react";
import { start } from "repl";

export default function Pomodoro() {
  const [minutes, setMinutes] = useState<number>(25);
  const [seconds, setSeconds] = useState<number>(0);
  const [displayMessage, setDisplayMessage] = useState<boolean>(false);
  const [runningTimer, setRunningTimer] = useState<boolean>(false);
  const [currentMode, setCurrentMode] = useState<string>("Focus");
  let startFocusTime, endFocusTime, startBreakTime, endBreakTime;

  function startTimer(): void {
    currentMode === "Focus"
      ? (startFocusTime = new Date().getTime())
      : (startBreakTime = new Date().getTime());
    setRunningTimer(true);
  }

  function stopTimer(): void {
    currentMode === "Focus"
      ? (endFocusTime = new Date().getTime())
      : (endBreakTime = new Date().getTime());
    setRunningTimer(false);
  }

  useEffect(() => {
    if (runningTimer) {
      let timerInterval = setInterval(() => {
        clearInterval(timerInterval);

        if (seconds === 0) {
          if (minutes !== 0) {
            setSeconds(59);
            setMinutes(minutes - 1);
          } else {
            let minutes = displayMessage ? 24 : 4;
            let seconds = 59;

            setSeconds(seconds);
            setMinutes(minutes);
            setDisplayMessage(!displayMessage);
          }
        } else {
          setSeconds(seconds - 1);
        }
      }, 1000);
    }
  }, [seconds]);

  const timerMinutes = minutes < 10 ? `0${minutes}` : minutes;
  const timerSeconds = seconds < 10 ? `0${seconds}` : seconds;

  return (
    <div className="pomodoro">
      <div className="message">
        {displayMessage && <p>Take a break! Next session starts in...</p>}
        <div className="timer">
          {timerMinutes}:{timerSeconds}
        </div>
      </div>
      <div className="timer-button">
        {runningTimer === false ? (
          <button onClick={startTimer}>Start</button>
        ) : (
          <button onClick={stopTimer}>Pause</button>
        )}
      </div>
    </div>
  );
}
