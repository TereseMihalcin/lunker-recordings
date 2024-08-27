import React, { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import { faCompactDisc } from '@fortawesome/free-solid-svg-icons'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';



class Navigation extends Component {

    // render() {

    //     return(
    //     <section id="navigaiton">
    //         <div class="navigation">
            
    //                 <h1 class="nav-logo">
    //                     <FontAwesomeIcon icon={faCompactDisc} />
    //                     Lunker Recordings
    //                 </h1>
    //                 <li class="links">
    //                 <a href="/">home icon</a>
    //                 <a href="/videos/">Videos</a>
    //                 <a href="/about/">About</a>
    //                 <a href="/recordings/">Recordings</a>
    //                 </li>
    //         </div>
    //     </section>
    //     );
    // }



render() {
  return (
    <Navbar expand="lg" sticky="top">
      <Container>
        <Navbar.Brand href="#home"><FontAwesomeIcon icon={faCompactDisc} /> Lunker Recordings</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#videos">Videos</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="/action/3.1">One Video</NavDropdown.Item>
              <NavDropdown.Item href="/action/3.2">Another Video</NavDropdown.Item>
              <NavDropdown.Item href="/action/3.3">Yet another Video</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#Contact">Contact Us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}



}
export default Navigation