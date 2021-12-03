import React from 'react';
import {Navbar, Nav} from 'react-bootstrap';
import Container from 'react-bootstrap/Container';

//css 
import './header.css'

const Header = () => {
  return(
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">
          <img
            alt=""
            src="/logo.svg"
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{' '}
          Dasboard
        </Navbar.Brand>
      </Container>
    </Navbar>
  )
}

export default Header