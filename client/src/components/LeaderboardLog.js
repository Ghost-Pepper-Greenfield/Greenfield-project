import React, { useEffect, useState } from "react";
import axios from "axios";

export default function LeaderboardLog() {
  const[ leaderboard, setLeaderboard ] = useState();
  const chart = leaderboard.map( player => {
    return <p>Player:{ player.firebaseId } Level:{ player.sum }</p>
  });

  useEffect(() => {
    getLeaderboard();
  }, [])

  async function getLeaderboard() {
    try{
      const fetchLeaderboard = await axios.get('/leaderboard');
      setLeaderboard(fetchLeaderboard.data);
    }catch(err) {
    console.log(err)
    alert("An error occurred while fetching leaderboard data");
   } 
  }
  return (
    <>
     <div>{chart}</div>
    </>
  )
}
