import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card,Navbar, Container, Nav, NavDropdown } from "react-bootstrap";

const Header = () => {
  return (
    <div>
      <Navbar className="nav-color" bg="dark" expand="lg" variant="dark" fixed="top">
        <Container className="d-flex">
          <Navbar.Brand href="#home" className="fs-3">E-CONFERENCE</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse
            className="ms-auto justify-content-end"
            id="basic-navbar-nav"
          >
            <Nav className="fs-4">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
              <Nav.Link href="#About">About</Nav.Link>
              <Nav.Link href="#Contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
