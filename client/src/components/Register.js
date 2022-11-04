import React, { useEffect, useState } from 'react';
import {Button, Card, Form} from 'react-bootstrap';
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
  <Card>
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

      <Form.Group id="email">
        <Form.Label> Email </Form.Label>
        <Form.Control 
        type="text" 
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="E-mail Address"
        />
      </Form.Group>


      <Form.Group id="password">
        <Form.Label> Password </Form.Label>
        <Form.Control
        type="password"
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        />
      </Form.Group>

      <Button className="w-100"  
      onClick={register}> Sign Up</Button>

       <Button className="w-100"  
      onClick={signInWithGoogle}> 
      Register with Google</Button>
    </Form>
    </Card.Body>
  </Card>

  <div>
    Already have an account? <Link to="/">Login</Link> now.
  </div>
  </>)
  
}
