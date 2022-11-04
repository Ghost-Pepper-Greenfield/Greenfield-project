import React, { useState } from 'react';
import "../styles/navbar.css";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import  Navbar  from 'react-bootstrap/Navbar';
import { LinkContainer } from 'react-router-bootstrap'
import { logout } from "../firebase-config";

export default function NavBar() {

  const [isOpen, setIsOpen] = useState(false);

  return (
      <>
      <Navbar className="navbar" variant="light">
        <Container>
        <Navbar.Brand>
            {/* <img
              alt="Study Hero Logo"
              src="../styles/rpg-game.png"
              width="50"
              height="50"
              className="d-inline-block align-top"
            /> */}
            Study Hero
          </Navbar.Brand>
          <Nav className="me-1">
          <Nav.Link className="me-3">Character Profile</Nav.Link>
          <Nav.Link className="me-3">Start Game</Nav.Link>
          <Nav.Link  className="me-3" onClick={logout}>Log Out</Nav.Link>
       </Nav>
      </Container>
      </Navbar>
     </>
  )
}
