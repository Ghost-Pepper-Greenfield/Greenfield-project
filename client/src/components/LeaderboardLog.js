import React, { useEffect, useState } from "react";
import axios from "axios";
import { setIndexConfiguration } from "firebase/firestore";

export default function LeaderboardLog() {
  const[ leaderboard, setLeaderboard ] = useState([]);
  

  useEffect(() => {
    getLeaderboard();
  }, [])

  async function getLeaderboard() {
    try{
      const fetchLeaderboard = await axios.get('/leaderboard');
      console.log(fetchLeaderboard.data)
      setLeaderboard(fetchLeaderboard.data);
      console.log(leaderboard)
    }catch(err) {
      console.log(err)
      alert("An error occurred while fetching leaderboard data");
   } 
  }
  const order = function() {
    for(let i=0; i < leaderboard.length; i++) {
      if(leaderboard[i].sum > leaderboard)
    }
  }
  const chart = leaderboard.map( player => { 
    return <p>{ player.firebaseId } Level: { player.sum }</p>});

  return (
    <>
     <div>{chart}</div>
    </>
  )
}
