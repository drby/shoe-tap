import React from 'react';

//assets
import Logo from '../../assets/images/logos/logo6.png'

//Bootstrap
import {Navbar} from 'react-bootstrap';
import Container from 'react-bootstrap/Container';

//css 
import './header.css'

const Header = () => {
  return(
    <Navbar bg="light" variant="light" sticky="top">
      <Container>
        <Navbar.Brand href="#home">
          <img
            alt="logo"
            src={Logo}
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{' '}
          Aldo
        </Navbar.Brand>
      </Container>
    </Navbar>
  )
}

export default Header