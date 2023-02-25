import React from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import Button from 'react-bootstrap/Button';
import { Navbar, Nav, Container } from 'react-bootstrap'
import logo from '../images/logo.png';

const Header = () => {
    return (
        <header>
            <Navbar variant='dark' expand='lg' collapseOnSelect>
                <Container >
                    <LinkContainer to='/'>
                        <Navbar.Brand><img src={logo} /></Navbar.Brand>
                    </LinkContainer>
                    <Navbar.Toggle aria-controls='basic-navbar-nav' />
                    <Navbar.Collapse id='basic-navbar-nav'>
                        <Nav style={{ alignItems: 'center', gap: 50, }} className='ml-auto'>
                            <LinkContainer to='/home'>
                                <Nav.Link>
                                    Home
                                </Nav.Link>
                            </LinkContainer>
                            <LinkContainer to='/our-services'>
                                <Nav.Link>
                                    Our Services
                                </Nav.Link>
                            </LinkContainer>
                            <Button className='contact-btn'>Contact Us</Button>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header >
    )
}

export default Header