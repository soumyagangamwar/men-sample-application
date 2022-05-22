import React from 'react';
import { Container, Nav, Navbar, NavDropdown, Form, FormControl } from 'react-bootstrap';


const Header = () => {
  return (

    <Navbar bg="primary" expand="lg" variant="dark">
      <Container>
        <Navbar.Brand href="/">
          Notes App
          </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
            </Form>
            </Nav>
            <Nav.Link href="/mynotes">
              {/* <Link to="/mynotes">My Notes</Link> */}
              MY Notes
              </Nav.Link>
           
            <NavDropdown title="Soumya" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">My Profile</NavDropdown.Item>
              <NavDropdown.Item href="#action4">Logout</NavDropdown.Item>
              
            </NavDropdown>
            
          

        </Navbar.Collapse>
      </Container>
    </Navbar>

  )
}

export default Header;