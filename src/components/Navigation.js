import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import Logo from "../assets/img/logo.jpg";

const Navigation = () => {
  return (
    <Navbar expand="lg" sticky="top" className="styled-nav">
      <Navbar.Brand href="#home">
        <img src={Logo} id="logo" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="nav-text">
          <Nav.Link id="nav-text" href="#home">
            Dashboard
          </Nav.Link>
          <Nav.Link id="nav-text" href="#link" className="align-bottom">
            Account
          </Nav.Link>

          <Navbar.Text id="nav-text">
            Signed in as:{" "}
            <a href="#login" id="nav-text">
              First_Name Last_Name here
            </a>
          </Navbar.Text>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;
