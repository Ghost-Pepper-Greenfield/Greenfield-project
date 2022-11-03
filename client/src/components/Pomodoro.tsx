import "./Pomodoro.css";
import React, { useState, useEffect } from "react";
import { start } from "repl";

export default function Pomodoro() {
  const [minutes, setMinutes] = useState<number>(25);
  const [seconds, setSeconds] = useState<number>(0);
  const [displayMessage, setDisplayMessage] = useState<boolean>(false);
  const [runningTimer, setRunningTimer] = useState<boolean>(false);
  const [focusMode, setFocusMode] = useState<boolean>(true);
  let startFocusTime, endFocusTime, startBreakTime, endBreakTime;

  function startTimer(): void {
    focusMode
      ? (startFocusTime = new Date().getTime())
      : (startBreakTime = new Date().getTime());
    setRunningTimer(true);
  }

  function stopTimer(): void {
    focusMode
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
            //change these back to 24 : 4 and 59
            let minutes = displayMessage ? 25 : 5;
            let seconds = 0;

            setSeconds(seconds);
            setMinutes(minutes);
            setDisplayMessage(!displayMessage);
            setFocusMode(!focusMode);
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
        {displayMessage && <p>Take a break! Your next adventure starts in:</p>}
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
