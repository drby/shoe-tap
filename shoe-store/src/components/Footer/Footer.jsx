import React from 'react';

//Bootstrap
import {Navbar, Nav} from 'react-bootstrap';
import Container from 'react-bootstrap/Container';

const Footer = () => {
    return(
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home">Navbar with text</Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text>
                        Made by: <a href="https://www.youtube.com/watch?v=QtBDL8EiNZo">Tom</a>
                    </Navbar.Text>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Footer