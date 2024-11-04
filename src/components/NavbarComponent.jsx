import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import styles from "./NavbarComponent.module.css";
export const NavbarComponent = () => {

  const[expanded,setExpanded]=useState(false);

  const handleLinkClick=()=>{
   setExpanded(false);
  };

  return (
    <>
      <Navbar expand="lg" className={`bg-light ${styles.navbarShadow}`} expanded={expanded} onToggle={()=>setExpanded(!expanded)}>
        <Container>
          <Navbar.Brand href="#home" className={styles.brandCustom}>Fitness Gym</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className={expanded ? styles.navbarCollapseRight : ""}>
            <Nav className="ms-auto">
              <Nav.Link as={Link} to="/" className={styles.navLinkCustom} onClick={handleLinkClick}>
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/about" className={styles.navLinkCustom} onClick={handleLinkClick}>
                About
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/services"
                className={styles.navLinkCustom} onClick={handleLinkClick}
              >
                Services
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/contact"
                className={styles.navLinkCustom} onClick={handleLinkClick}
              >
                ContactUs
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};
