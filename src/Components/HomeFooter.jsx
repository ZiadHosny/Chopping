import React from 'react'
import wLogo from '../images/whiteLogo.png';
import socialF from '../images/social-f.png';
import socialI from '../images/social-i.png';
import { Container, Nav, Navbar, } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { Link } from 'react-router-dom';

const HomeFooter = () => {
    return (
        <div className='footer'>

            <Container style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 10, paddingTop: 20 }}>
                <LinkContainer to='/'>
                    <Navbar.Brand><img src={wLogo} /></Navbar.Brand>
                </LinkContainer>
                <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column', marginTop: 20 }}>
                    <div>
                        <a href='#'><img src={socialF} /></a>
                        <a href='#'><img src={socialI} /></a>
                    </div>
                    <Nav>
                        <Nav.Link className='link-text' to={'/'}>About Us</Nav.Link>
                        <Nav.Link className='link-text' to={'/'}>Contact Us</Nav.Link>
                        <Nav.Link className='link-text' to={'/'}>Registered Bukas</Nav.Link>
                        <Nav.Link className='link-text' to={'/'}>Chat</Nav.Link>
                    </Nav>
                </div>
                <Link style={{ background: 'white', padding: '10px 25px', borderRadius: 20, marginTop: 50 }}>Log out</Link>

            </Container>
            <Container style={{ marginTop: 70, textAlign: 'center' }}>
                <div style={{ width: '100%', height: 3, background: 'white', marginBottom: 26 }}></div>
                <div style={{
                    fontFamily: 'Inter',
                    fontSize: 12,
                    fontWeight: 400,
                    color: '#D1D5DB',
                }}>© 2023 Choppings. All rights reserved
                </div>
            </Container>
        </div >
    )
}

export default HomeFooter