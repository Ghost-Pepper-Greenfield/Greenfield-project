import React, { useEffect, useState } from "react";
import { Card, Form, Button } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { auth, sendPasswordReset } from "../firebase-config";
import '../styles/reset.css'

export default function Reset() {
  const [email, setEmail] = useState("");
  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (loading) return;
    if (user) navigate("/reset");
  }, [user, loading]);

  return (
    <>
    <div 
      id="reset__wrapper"
      className="d-flex flex-column justify-content-center align-items-center"
    >

    <Card>
      <Card.Body
       className="d-flex flex-column justify-content-center align-items-center">
      <Form.Group
       className="text-center mb-4">

        <Form.Label> Reset Password </Form.Label>

        <Form.Control
        type="text"
        value = {email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="E-mail Address"
        />
        <br></br>
         <Button
          variant="outline-info"
          size="sm"
          className="w-100"  
          onClick={() => sendPasswordReset()}>
         Send Password Reset Email</Button>
      </Form.Group>
      </Card.Body>
    </Card>
     <div>
     Don't have an account? <Link to="/register">Register</Link> now.
   </div>
   </div>
   </>
  )
}
