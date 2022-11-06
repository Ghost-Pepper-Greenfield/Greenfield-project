import "../styles/Pomodoro.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { db, auth } from "../firebase-config";
import { useNavigate } from "react-router-dom";
import { query, collection, getDocs, where } from "firebase/firestore";
import { useAuthState } from "react-firebase-hooks/auth";
import run from "../styles/run.gif";
import idle from "../styles/idle.gif";

export default function Pomodoro() {
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(5);
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
    <div id="pomodoro__wrapper">
      <div id="sprite__wrapper">
        {runningTimer === false ? (
          <>
            <img className="sprite" src={idle}></img>
          </>
        ) : (
          <>
            <img className="sprite" src={run}></img>
          </>
        )}
      </div>
      <div id="message__wrapper">
        {displayMessage && (
          <div>Take a break! Your next adventure starts in:</div>
        )}
        <div id="timer__wrapper">
          {timerMinutes}:{timerSeconds}
        </div>
      </div>
      <div>
        {runningTimer === false ? (
          <>
            <button className="w-100" onClick={startTimer}>
              Start
            </button>
            <button className="w-100" onClick={saveProgress}>
              Save
            </button>
          </>
        ) : (
          <>
            <button className="w-100" onClick={stopTimer}>
              Pause
            </button>
          </>
        )}
      </div>
    </div>
  );
}
