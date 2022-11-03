import "./Pomodoro.css";
import React, { useState, useEffect } from "react";

export default function Pomodoro() {
  const [minutes, setMinutes] = useState<number>(0);
  const [seconds, setSeconds] = useState<number>(5);
  const [displayMessage, setDisplayMessage] = useState<boolean>(false);
  const [runningTimer, setRunningTimer] = useState<boolean>(false);
  const [focusMode, setFocusMode] = useState<boolean>(true);
  let startFocusTime, stopFocusTime;

  function startTimer(): void {
    startFocusTime = new Date().getTime();
    setRunningTimer(true);
  }

  function stopTimer(): void {
    stopFocusTime = new Date().getTime();
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
            setFocusMode(!focusMode);
          }
        } else {
          setSeconds(seconds - 1);
        }
      }, 1000);
    }
  }, [seconds, runningTimer]);

  const timerMinutes = minutes < 10 ? `0${minutes}` : minutes;
  const timerSeconds = seconds < 10 ? `0${seconds}` : seconds;

  return (
    <div className="pomodoro">
      <div className="message">
        {displayMessage && (
          <div>Take a break! Your next adventure starts in:</div>
        )}
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
