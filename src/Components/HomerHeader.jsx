import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import logo from '../images/logo.png';
import fav from '../images/fav.png';
import cart from '../images/cart.png';
import time from '../images/time.png';
import icon from '../images/icon.png';
import { LinkContainer } from 'react-router-bootstrap';

const HomerHeader = () => {
    return (
        <div className='home-header'>
            <Container style={{ display: 'flex', alignItems: 'center', marginTop: 10 }}>
                <LinkContainer to='/'>
                    <Navbar.Brand><img src={logo} /></Navbar.Brand>
                </LinkContainer>
                <Nav style={{ alignItems: 'center', gap: 20, }} className='ml-auto'>
                    <LinkContainer to='/home'>
                        <Nav.Link>
                            <img src={fav} alt="" srcset="" style={{ width: 20 }} />
                        </Nav.Link>
                    </LinkContainer>
                    <LinkContainer to='/home'>
                        <Nav.Link>
                            <img src={cart} alt="" srcset="" style={{ width: 20 }} />
                        </Nav.Link>
                    </LinkContainer>
                    <LinkContainer to='/home'>
                        <Nav.Link>
                            <img src={time} alt="" srcset="" style={{ width: 20 }} />
                        </Nav.Link>
                    </LinkContainer>
                    <LinkContainer to='/home'>
                        <Nav.Link>
                            <img src={icon} alt="" srcset="" style={{ width: 40 }} />
                        </Nav.Link>
                    </LinkContainer>
                </Nav>
            </Container>
            <Nav className="me-auto" style={{ display: 'flex', color: 'white', justifyContent: 'space-evenly', background: '#F31D1D', marginTop: 10 }}>
                <Nav.Link className='link-text-home' to={'/'}>Home</Nav.Link>
                <Nav.Link className='link-text' to={'/'}>About Us</Nav.Link>
                <Nav.Link className='link-text' to={'/'}>Contact Us</Nav.Link>
                <Nav.Link className='link-text' to={'/'}>Registered Bukas</Nav.Link>
                <Nav.Link className='link-text' to={'/'}>Settings</Nav.Link>
                <Nav.Link className='link-text' to={'/'}>Order History</Nav.Link>
            </Nav>

        </div>
    )
}

export default HomerHeader