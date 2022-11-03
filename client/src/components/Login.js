import React, { useEffect, useState } from 'react';
import {Button, Card, Form} from 'react-bootstrap';
import { auth, signInWithEmailAndPassword, signInWithGoogle } from "../firebase-config";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from 'react-router-dom';


export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (loading) {
      // maybe trigger a loading screen
      return;
    }
    if (user) navigate("/dashboard");
  }, [user, loading]);

  return (<div>
  <Card>
<Card.Body>
<h2 className="text-center mb-4">Login</h2>
<Form>
  <Form.Group id="email">
    <Form.Label> Email </Form.Label>
    <Form.Control 
    type="email" 
    value={email} 
    onChange= {(e)=> setEmail(e.target.value)} 
    placeholder="E-mail Address"/>
  </Form.Group>

  <Form.Group id="password">
    <Form.Label> Password </Form.Label>
    <Form.Control
    value={password}
    onChange = {(e) => setPassword(e.target.value)}
    placeholder="Password"/>
  </Form.Group>

  <Button className="w-100"
  onClick={() => signInWithEmailAndPassword(email,password)
  }> Login </Button>

  <Button 
  onClick={signInWithGoogle}>Login with Google</Button>
</Form>
</Card.Body>
</Card>
</div>)
}