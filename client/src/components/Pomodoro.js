import "../styles/Pomodoro.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { db, auth } from "../firebase-config";
import { useNavigate } from "react-router-dom";
import { query, collection, getDocs, where } from "firebase/firestore";
import { useAuthState } from "react-firebase-hooks/auth";
import run from "../styles/run.gif";
import idle from "../styles/run.gif";

export default function Pomodoro() {
  const [minutes, setMinutes] = useState(25);
  const [seconds, setSeconds] = useState(0);
  const [duration, setDuration] = useState(1);
  const [displayMessage, setDisplayMessage] = useState(false);
  const [runningTimer, setRunningTimer] = useState(false);
  const [postObject, setPostObject] = useState({});
  const [uid, setUid] = useState("");
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();

  const fetchUid = async () => {
    try {
      const q = query(collection(db, "users"), where("uid", "==", user?.uid));
      const doc = await getDocs(q);
      const data = doc.docs[0].data();
      setUid(data.uid);
    } catch (err) {
      console.error(err);
      alert("An error occured while fetching user data");
    }
  };

  function startTimer() {
    setRunningTimer(true);
  }

  function stopTimer() {
    setRunningTimer(false);
    setPostObject({
      firebaseId: uid,
      date: new Date(),
      duration: duration,
      points: Math.floor(duration / 60),
    });
  }

  async function saveProgress() {
    setDuration(1);
    return await axios.post(`/new-session`, postObject);
  }

  useEffect(() => {
    if (loading) return;
    if (!user) return navigate("/database");
    fetchUid();
  }, [user, loading]);

  console.log(uid);

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
          setDuration(duration + 1);
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
        <div className="sprite-container">
          {runningTimer === false ? (
            <>
              <img src={idle}></img>
            </>
          ) : (
            <>
              <img src={run}></img>
            </>
          )}
        </div>
        <div className="timer">
          {timerMinutes}:{timerSeconds}
        </div>
      </div>
      <div className="timer-button">
        {runningTimer === false ? (
          <>
            <button onClick={startTimer}>Start</button>
            <button onClick={saveProgress}>Save</button>
          </>
        ) : (
          <>
            <button onClick={stopTimer}>Pause</button>
          </>
        )}
      </div>
    </div>
  );
}
