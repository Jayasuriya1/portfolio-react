// import React from "react";

// export default function NaveBar(){
//     return(
//         <div>
//             <nav class="navbar navbar-expand-lg bg-body-tertiary">
//   <div class="container-fluid">
//     <a class="navbar-brand" href="#">Navbar</a>
//     <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
//       <span class="navbar-toggler-icon"></span>
//     </button>
//     <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
//       <div class="navbar-nav">
//         <a class="nav-link active" aria-current="page" href="#">Home</a>
//         <a class="nav-link" href="#">Features</a>
//         <a class="nav-link" href="#">Pricing</a>
//         <a class="nav-link disabled">Disabled</a>
//       </div>
//     </div>
//   </div>
// </nav>
//         </div>
//     )
// }


import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavBar() {
  return (
    <div >
        <Navbar bg="black" variant="dark" expand="lg" className='nav-bar'>
      <Container>
        <Navbar.Brand href="#home" ><span className='blue-text'>Jayasuriya</span></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav className="me-auto">
            <Nav.Link href="#about-section">ABOUT</Nav.Link>
            <Nav.Link href="#skill-section">SKILL</Nav.Link>
            <Nav.Link href="#project-section">PROJECT</Nav.Link>
            <Nav.Link href="#contact-section">CONTACT</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  );
}

export default NavBar;