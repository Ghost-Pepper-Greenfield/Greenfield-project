import React, { useState } from 'react';
import "../styles/navbar.css";
import {Nav, Container, Navbar} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import sword from '../styles/sword.png';
import { logout } from "../firebase-config";

export default function NavBar({isOpen}) {

  return (
    <>
    
        {isOpen === true ? 
        (<Navbar className="navbar" variant="light">
        <Container>
        <Navbar.Brand >
            <img
              alt="Study Hero Logo"
              src={sword}
              width="50"
              height="50"
              className="d-inline-block align-top me-4"
            />
            Study Hero
          </Navbar.Brand>
          <Nav className="me-1">
          <Link className="me-3" to="/dashboard">Character Profile</Link>
          <Link className="me-3" onClick={logout}>Log Out</Link>
       </Nav>
      </Container>
      </Navbar>
      ) : (
      <Navbar className="navbar" variant="light">
        <Container>
        <Navbar.Brand >
            <img
              alt="Study Hero Logo"
              src={sword}
              width="50"
              height="50"
              className="d-inline-block align-top me-4"
            />
            Study Hero
          </Navbar.Brand>
      </Container>
      </Navbar>)}
     </>
  )
}
