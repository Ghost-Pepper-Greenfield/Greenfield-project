import React, { useEffect, useState } from "react";
import {Button, Card, Form} from 'react-bootstrap';
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { auth, db, logout } from "../firebase-config";
import { query, collection, getDocs, where } from "firebase/firestore";

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
    if (!user) return navigate("/dashboard");
    fetchUserName();
  }, [user, loading]);


  return (
    <Card>
    <Card.Body>
      <h1>Welcome {name}, are you ready for your adventure?</h1>
      <Button>Start Game</Button>
      <Button onClick={logout} >Logout</Button>
    </Card.Body>
    </Card>
  )
}
