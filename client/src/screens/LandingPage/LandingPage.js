import React from 'react'
import { Button, Container, Row } from 'react-bootstrap';
import './LandingPage.css';

const LandingPage = () => {
  return (
    <div className="main">
        <Container>
            <Row>
                <div className="intro-text">
                  <div>
                    <h1 className="title">Save your Notes Here!!!</h1>
                    <p className="subtitle">One stop for all your activites</p>
                  </div>
                   <div className="buttonContainer">
                     <a href='/login'>
                       <Button size="lg" className="landingbutton">Login</Button>
                     </a>
                     <a href='/login'>
                       <Button size="lg" className="landingbutton" variant="outline-primary">SIGNUP</Button>
                     </a>
                   </div>
                </div>

            </Row>
        </Container>
    </div>
  )
}

export default LandingPage;