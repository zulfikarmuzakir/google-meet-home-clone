import React from "react";
import './Navbar.css';
import { Button, Navbar, Nav, NavDropdown } from "react-bootstrap";
import logo from "../../assets/google-workspace-logo.svg";

function NavbarHeader() {
  return (
    <div className="App">
      <Navbar variant="light" expand="lg" className="color-nav ">
        <Navbar.Brand href="#home"><img src={logo} className="logo" alt=""/></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home">Overview</Nav.Link>
            <NavDropdown title="What's included" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#link">Pricing</Nav.Link>
            <Nav.Link href="#link">Security</Nav.Link>
            <Nav.Link href="#link">Resources</Nav.Link>
          </Nav>
          <a href="#link">Admin Console</a>
          <Button variant="outline-primary">Contact sales</Button>
          <Button variant="primary">Start Free Trial</Button>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default NavbarHeader;
