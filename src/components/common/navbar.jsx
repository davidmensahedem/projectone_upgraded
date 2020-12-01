import React from "react";
import { Navbar, Nav } from "react-bootstrap";


const NavBar = (props) => {
  return (
    <Navbar bg="primary" expand="lg">
      <Navbar.Brand href="/"><b>Project React</b></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link href="/" className="text-white">
            <b>USER A</b>
          </Nav.Link>
          <Nav.Link href="/userb" className="text-white">
            <b>USER B</b>
          </Nav.Link>
          <Nav.Link href="/userc" className="text-white">
            <b>USER C</b>
          </Nav.Link>
          <Nav.Link href="/userd" className="text-white">
            <b>USER D</b>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
