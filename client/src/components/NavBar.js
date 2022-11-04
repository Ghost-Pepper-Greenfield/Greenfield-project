import React from 'react';
import "../styles/navbar.css";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
      <>
      <Navbar className="navbar" variant="light">
        <Container>
        <Navbar.Brand>
            <img
              alt="Study Hero Logo"
              src="../styles/rpg-game.png"
              width="50"
              height="50"
              className="d-inline-block align-top"
            />
            Study Hero
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#Dashboard">Character Page</Nav.Link>
            <Nav.Link href="#Pomodoro">Start Adventure</Nav.Link>
            <Nav.Link href="#LogOut">Log out</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
     </>
  )
}
