import React, { useEffect, useState } from 'react';
import {Button, Card, Form, Stack} from 'react-bootstrap';
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import {
  auth,
  registerWithEmailAndPassword,
  signInWithGoogle,
} from "../firebase-config";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [user, loading, error] = useAuthState(auth);
  const history = useNavigate();

  const register = () => {
    if (!name) alert("Please enter name");
    registerWithEmailAndPassword(name, email, password);
  };
  useEffect(() => {
    if (loading) return;
    if (user) history("/dashboard");
  }, [user, loading]);


  return (
  <>
  <div id="login__wrapper" 
  className="d-flex flex-column justify-content-center align-items-center">
  <Card className="d-flex flex-column justify-content-center align-items-center">
    <Card.Body>
    <h2 className="text-center mb-4">Sign Up</h2>
    <Form>
      <Form.Group id="name">
        <Form.Label> Full Name </Form.Label>
        <Form.Control type="text"
        value={name}
        onChange = {(e)=> setName(e.target.value)}
        />
      </Form.Group>
      <br></br>
      <Form.Group id="email">
        <Form.Label> Email </Form.Label>
        <Form.Control 
        type="text" 
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="E-mail Address"
        />
      </Form.Group>

      <br></br>
      <Form.Group id="password">
        <Form.Label> Password </Form.Label>
        <Form.Control
        type="password"
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        />
      </Form.Group>

      <br></br>
      <Stack gap={2} className="col-md-5 mx-auto">
        <Button 
        variant="outline-info"
        size="sm"
        className="w-100" 
        onClick={register}> Sign Up</Button>

        <Button 
        variant="outline-info"
        size="sm"
        className="w-100"  
        onClick={signInWithGoogle}> 
        Register with Google</Button>

      </Stack>
      

     
    </Form>
    </Card.Body>
  </Card>

  <div>
    Already have an account? <Link to="/">Login</Link> now.
  </div>
  </div>
  </>)
  
}
