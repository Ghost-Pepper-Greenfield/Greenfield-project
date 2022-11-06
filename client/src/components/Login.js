import React, { useEffect, useState } from 'react';
import {Button, Card, Form, Stack} from 'react-bootstrap';
import { auth, signInWithEmailAndPassword, signInWithGoogle } from "../firebase-config";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate, Link } from 'react-router-dom';
import '../styles/login.css'


export default function Login({setIsOpen}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();

  useEffect(() => {
    setIsOpen(false);
    if (loading) {
      // maybe trigger a loading screen
      return;
    }
    if (user) navigate("/dashboard");
  }, [user, loading]);

  return (
  <div id="login__wrapper" 
  className="d-flex flex-column justify-content-center align-items-center">
  <Card className="nes-container is-rounded">

<Card.Body
 className="d-flex flex-column justify-content-center align-items-center">
<h2 className="text-center mb-4">Welcome</h2>
<p class="nes-balloon nes-pointer  from-right">
  Are you ready for your adventure?
</p>

<h4>Login</h4>
<Form>

  <Form.Group id="email">
    <Form.Label> Email </Form.Label>
    <Form.Control 
    className="nes-input"
    type="email" 
    value={email} 
    onChange= {(e)=> setEmail(e.target.value)} 
    placeholder="E-mail Address"/>
  </Form.Group>
  <br></br>

  <Form.Group id="password">
    <Form.Label> Password </Form.Label>
    <Form.Control
    className="nes-input"
    value={password}
    onChange = {(e) => setPassword(e.target.value)}
    placeholder="Password"/>
  </Form.Group>
  <br></br>

  <Stack 
    gap={2} 
    className="col-md-5 mx-auto"
  >

    <Button 
      variant="outline-info"
      size="sm"
      className="w-100"
      onClick={() => signInWithEmailAndPassword(email,password)
      }> 
      Login
    </Button>
    
    <Button
      variant="outline-info"
      size="sm"
      className="w-100"
      onClick={signInWithGoogle}>
      Login with Google
    </Button>

  </Stack>

</Form>
</Card.Body>
</Card>

<div>
    Don't have an account? <Link to="/register">Register</Link> now.
  </div>
</div>)
}