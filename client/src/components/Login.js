import React, { useRef } from 'react';
import {Button, Card, Form} from 'react-bootstrap';

export default function Login() {
    const emailRef= useRef(null);
    const passwordRef = useRef(null);
    return <>

    <Card>
      <Card.Body>
      <h2 className="text-center mb-4">Login</h2>
      <Form>
        <Form.Group id="email">
          <Form.Label> Email </Form.Label>
          <Form.Control type="email" ref={emailRef} required/>
        </Form.Group>
  
        <Form.Group id="password">
          <Form.Label> Password </Form.Label>
          <Form.Control type="password" ref={passwordRef} required/>
        </Form.Group>
  

        <Button className="w-100"> Login </Button>
      </Form>
      </Card.Body>
    </Card>
  
    <div>
      Need and account? Sign up.
    </div>
    </>
}
