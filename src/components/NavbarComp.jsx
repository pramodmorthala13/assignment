import React from "react";
import { Navbar, Container,Nav } from "react-bootstrap";
import {LinkContainer} from 'react-router-bootstrap'

const NavbarComp = () => {
  return (
    <div>
      <Navbar bg="primary" variant="dark" fixed="top">
        <Container>
         <LinkContainer to="/">
         <Navbar.Brand >Lawyer</Navbar.Brand>
         </LinkContainer>
          <Nav className="me-auto">
           <LinkContainer to="/history">
           <Nav.Link >
                History
            </Nav.Link>
           </LinkContainer>
           
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavbarComp;
