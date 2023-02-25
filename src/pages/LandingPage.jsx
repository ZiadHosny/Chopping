import React from 'react'
import { Container } from 'react-bootstrap'
import Header from '../Components/Header'
import insta from '../images/insta.png';
import f from '../images/f.png';
import twiter from '../images/twiter.png';
import { Link } from 'react-router-dom';


const LandingPage = () => {
    return (
        <div className='landing-page'>
            <Header />
            <Container style={{ marginTop: '50px', display: 'flex', height: '100%' }}>
                <div className='col-7' style={{ alignItems: 'flex-start' }}>

                    <h1 className='title' >Choppings</h1>
                    <h2>Chop “buka” in style!</h2>
                    <p>
                        Lorem ipsumlorem ipsum Lorem ipsumlo
                        Lorem ipsumlorem ipsum Lorem ipsumlo
                        Lorem ipsumlorem ipsum Lorem ipsumlo
                    </p>
                    <div className='flex'>
                        <Link className='loginBtn' to='/login'>Log in</Link>
                        <Link className='contact-btn'>Use as a guest</Link>
                    </div>

                    <p>Don’t have an account?  <Link style={{ color: '#FFE604' }} to={'/signup'}>Sign up</Link></p>
                </div>
                <div style={{ paddingBottom: '20px', display: 'flex', alignItems: 'end', textAlign: 'end', gap: 20, marginLeft: 'auto' }}>
                    <a href='#'><img src={insta} /></a>
                    <a href='#'><img src={f} /></a>
                    <a href='#'><img src={twiter} /></a>
                </div>
            </Container>
        </div>
    )
}

export default LandingPage
