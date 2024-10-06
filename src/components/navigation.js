import React, { Component } from "react";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';



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
    <Navbar data-bs-theme="dark" expand="lg" sticky="top">
      <Container>
        <Navbar.Brand href="/home"> 
          <a href="/">
            <img src="/images/lunker.png" alt="lunker logo" class="logo"></img>
          </a>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/brains">Human Brains</Nav.Link>
            <Nav.Link href="/father">Father</Nav.Link>
            {/* <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/contact">Contact us</Nav.Link> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}



}
export default Navigation