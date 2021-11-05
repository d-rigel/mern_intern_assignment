import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from "../../../assets/images/logoss.jpg";
// import { Link } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";

export const Header = () => {
  return (
    <Navbar collapseOnSelect bg="info" expand="md">
      <Container>
        <Navbar.Brand>
          <img src={logo} alt="logo" with="20px" />
        </Navbar.Brand>
        <Navbar.Toggle arial-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <LinkContainer to="/">
              <Nav.Link>Home</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/Schools">
              <Nav.Link>Schools</Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
