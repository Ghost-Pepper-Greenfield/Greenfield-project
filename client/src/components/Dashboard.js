// eslint-disable-next-line
import React, { useEffect, useState } from "react";
import {Button, Card, Container, Row, Stack} from 'react-bootstrap';
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate, Link } from "react-router-dom";
import { auth, db, logout } from "../firebase-config";
import { query, collection, getDocs, where } from "firebase/firestore";
import LeaderboardLog from "./LeaderboardLog";
import UserLog from "./UserLog";
import '../styles/dashboard.css'

export default function Dashboard({setIsOpen}) {
  const [user, loading] = useAuthState(auth);
  const [name, setName] = useState("");
  const [board, setBoard] = useState("leaderboard");
  const navigate = useNavigate();

  const fetchUserName = async () => {
    try {
      const q = query(collection(db, "users"), where("uid", "==", user?.uid));
      const doc = await getDocs(q);
      const data = doc.docs[0].data();
      setName(data.name);
    } catch (err) {
      console.error(err);
      alert("An error occured while fetching user data");
    }
  };
  
  useEffect(() => {
    setIsOpen(true);
    if (loading) return;
    if (!user) return navigate("/");
    fetchUserName();
  }, [user, loading, navigate, fetchUserName]);


  return (
  <div id="dashboard__wrapper" className="d-flex flex-column justify-content-center align-items-center">
    <Container>
    <Row md={2}>
    <Card>
    <Card.Body 
      id="card__body" 
      className="d-flex flex-column justify-content-center align-items-center"
    >
      <h1>Score</h1>

    <Container>

    <p className="nes-balloon nes-pointer">
  Userlogs and Leaderboard Goes Here
    </p>

    {board === "leaderboard" ?
     (<LeaderboardLog/>) : (<UserLog/>)}

    </Container>
      <Stack 
    direction="horizontal"
    gap={2} 
      >
    <Button 
    variant="secondary"
    size="sm"
    className="w-100"
    onClick={()=>(setBoard("leaderboard"))}
    >
        Leaderboard
      </Button>

      <Button  
      variant="secondary"
      size="sm"
      className="w-100"
      onClick={()=>(setBoard("userlog"))}
      >
        Character Stats</Button>

  </Stack>
  


    

      
    </Card.Body>
    </Card>

    <Card>
    <Card.Body id="card___body" className="d-flex flex-column justify-content-center align-items-center">
      <p className="nes-balloon nes-pointer from-left">
       Welcome {name},
       are you ready to start a new adventure?
      </p>

      <div class="nes-container with-title is-centered">
        <p class="title">Menu</p>
        <ul class="nes-list is-disc">
          <li><Link to="/study">Start</Link></li>
          <br></br>
          <li><Link to="/reset">Reset Password</Link></li>
          <br></br>
        </ul>
      </div>
    </Card.Body>
    </Card>
    </Row>
    </Container>

    
    </div>
  )
}
