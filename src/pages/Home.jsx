import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap';
import Slider from "react-slick";
import { Link } from 'react-router-dom';
import logo from '../images/logo.png';
import wLogo from '../images/whiteLogo.png';
import fav from '../images/fav.png';
import cart from '../images/cart.png';
import time from '../images/time.png';
import icon from '../images/icon.png';
import storeBadge from '../images/Store badge.png';
import storeBadge2 from '../images/Store badge2.png';
import bg from '../images/bg.png';
import iphone from '../images/iPhone12pro.png';
import socialF from '../images/social-f.png';
import socialI from '../images/social-i.png';

const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 500
};

const titleStyle = {

    fontFamily: 'Raleway',
    fontWeight: 600,
    fontSize: '32px',
    lineHeight: '106.4%',
    color: '#585353',
    margin: '30px 0'
}

const Home = () => {
    return (
        <>
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
            <div >
                <div style={{ marginLeft: 200, }}>
                    <div style={titleStyle}>Today’s Special</div>
                    <Slider {...settings}>

                    </Slider>
                </div>

            </div>

            <Container style={{ display: 'flex', justifyContent: 'space-between' }}>
                <div style={titleStyle}>Newly Registered Bukas   </div>
            </Container>

            <div style={{ backgroundImage: `url(${bg})`, height: 300, padding: 20, marginTop: 100, marginBottom: 300 }}>
                <Container style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <div>
                        <div style={{
                            color: '#fff',
                            fontFamily: 'Raleway',
                            fontWeight: 700,
                            fontSize: '64px',
                            lineHeight: '106%'
                        }}>You can now
                            <br />
                            Download our App
                        </div>
                        <div style={{
                            marginTop: 10,
                            marginBottom: 10,
                            color: 'red',
                            fontFamily: 'Raleway',
                            fontWeight: 600,
                            fontSize: '24px',
                            lineHeight: '28px'
                        }}>
                            Lorem ipsum lorem ipsum lorem ipsumLorem
                        </div>
                        <div style={{ color: 'white' }}>Get the App</div>
                        <div style={{ display: 'flex' }}>
                            <LinkContainer to='/home'>
                                <Navbar.Brand><img src={storeBadge} /></Navbar.Brand>
                            </LinkContainer>
                            <LinkContainer to='/home'>
                                <Navbar.Brand><img src={storeBadge2} /></Navbar.Brand>
                            </LinkContainer>
                        </div>
                    </div>
                    <img src={iphone} alt="" srcset="" />
                </Container>
            </div >

      
        </>
    )
}

export default Home
