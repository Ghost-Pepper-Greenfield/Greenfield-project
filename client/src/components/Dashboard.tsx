import React, { useEffect, useState } from "react";
import {Button, Card, Container, Row, Stack} from 'react-bootstrap';
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { auth, db, logout } from "../firebase-config";
import { query, collection, getDocs, where } from "firebase/firestore";
import '../styles/dashboard.css'

export default function Dashboard() {
  const [user, loading, error] = useAuthState(auth);
  const [name, setName] = useState("");
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
    if (loading) return;
    if (!user) return navigate("/login");
    fetchUserName();
  }, [user, loading]);

  console.log(user)


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

    </Container>
      <Stack 
    direction="horizontal"
    gap={2} 
      >
    <Button 
    variant="secondary"
    size="sm"
    className="w-100">
        Leaderboard
      </Button>

      <Button  
      variant="secondary"
      size="sm"
      className="w-100">
        Character Stats</Button>

  </Stack>
  


    

      
    </Card.Body>
    </Card>

    <Card>
    <Card.Body id="card___body" className="d-flex flex-column justify-content-center align-items-center">
      <h2>Welcome {name},</h2>
      <p className="nes-balloon nes-pointer">
        We've been waiting for you! To start an adventure, click start game.
      </p>
      <Stack 
      gap={2} 
      direction="horizontal"
       >
    <Button 
    variant="secondary"
    size="sm"
    className="w-100">
        Start Game
      </Button>

      <Button  
      variant="secondary"
      size="sm"
      onClick={logout} 
      className="w-100">Logout</Button>

<Button  
      variant="secondary"
      size="sm"
      className="w-100">Reset Password</Button>

  </Stack>
    </Card.Body>
    </Card>
    </Row>
    </Container>

    
    </div>
  )
}
