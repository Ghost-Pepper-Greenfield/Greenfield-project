import React from 'react'
import '../styles/MaintenancePage.css'
import {Card} from 'react-bootstrap';


export default function MaintenancePage() {
  return (
    <div id="mp__wrapper" 
      className="d-flex flex-column min-vh-100 justify-content-center align-items-center">
      <Card className="mp__wrapper">
        <Card.Body className="d-flex flex-column justify-content-center align-items-center">
          <h1>Hello!</h1>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <p>Your adventure is coming soon...</p>
          <div id="progressbar">
            <span id="loading"></span>
          </div>
        </Card.Body>
      </Card>

    </div>
  )
}
