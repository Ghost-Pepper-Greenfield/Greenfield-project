import React, { useEffect, useState } from "react";
import { Card, Form, Button } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { auth, sendPasswordReset } from "../firebase-config";

export default function Reset() {
  const [email, setEmail] = useState("");
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (loading) return;
    if (user) navigate("/dashboard");
  }, [user, loading]);

  return (
    <>
    <Card>
      <Card.Body>
      <Form.Group id="reset__email">
        <Form.Label> Reset Password </Form.Label>
        <Form.Control
        type="text"
        value = {email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="E-mail Address"
        />
         <Button className="w-100"  
      onClick={() => sendPasswordReset()}>
         Send Password Reset Email</Button>
      </Form.Group>
      </Card.Body>
    </Card>
     <div>
     Don't have an account? <Link to="/register">Register</Link> now.
   </div>
   </>
  )
}
