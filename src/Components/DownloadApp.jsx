import React from 'react'
import { Container, Navbar } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap';
import storeBadge from '../images/Store badge.png';
import storeBadge2 from '../images/Store badge2.png';
import bg from '../images/bg.png';
import iphone from '../images/iPhone12pro.png';

const DownloadApp = () => {
    return (
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
    )
}

export default DownloadApp