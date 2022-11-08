import React, { useEffect, useState } from "react";
import axios from "axios";



export default function LeaderboardLog() {
  const[ leaderboard, setLeaderboard ] = useState([]);
  

  useEffect(() => {
    getLeaderboard();
  }, [])

  async function getLeaderboard() {
    try{
      const fetchLeaderboard = await axios.get('/leaderboard');
      setLeaderboard(fetchLeaderboard.data);
    }catch(err) {
      console.log(err)
   } 
  }
  
  const sortPlayers = function(array){
    for(let i = 0; i < array.length - 1; i++) {
      let minIndex = i;
      for(let j = i + 1; j < array.length; j++) {
        if(parseInt(array[j].sum) > parseInt(array[minIndex].sum)) {
          minIndex = j;
        }
      }
      [array[i], array[minIndex]] = [array[minIndex], array[i]];
    }
    return array;
  }

  const chart = sortPlayers(leaderboard).map( player => { 
    return <p>{ player.firebaseId } Level: { player.sum }</p>});

  return (
    <>
     <div>{chart}</div>
    </>
  )
}
