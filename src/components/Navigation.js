import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import Logo from "../assets/img/logo2.jpg";

const Navigation = (props) => {
  const { user } = props;
  return (
    <Navbar expand="lg" sticky="top" className="styled-nav">
      <Navbar.Brand href="#home">
        <img src={Logo} id="logo" alt="alluvia-logo" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="nav-text">
          <Nav.Link id="nav-text" href="#home">
            Add New Subscription
          </Nav.Link>
          <Nav.Link id="nav-text" href="#link" className="align-bottom">
            Profile
          </Nav.Link>

          <Navbar.Text id="nav-text">
            Signed in as:
            <a href="#login" id="nav-text">
              {` ${user.first_name}`}
            </a>
          </Navbar.Text>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;
