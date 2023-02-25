import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import logo from '../images/logo.png';
import fav from '../images/fav.png';
import cart from '../images/cart.png';
import time from '../images/time.png';
import icon from '../images/icon.png';
import { LinkContainer } from 'react-router-bootstrap';
import { Link } from 'react-router-dom';

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
            <div style={{
                marginTop: 150,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <div className='title' style={{ fontSize: 70, lineHeight: '20px' }}>Choppings</div>
                <div className='title' style={{ fontSize: 50, color: 'white' }}>Chop “buka” in style!</div>
                <Link style={{ background: '#F31D1D', padding: '10px 120px', borderRadius: 10, color: 'white', fontSize: 20, fontWeight: 600 }}>Find a buka near me</Link>
            </div>


        </div>
    )
}

export default HomerHeader