import React from 'react'
import { Button, Container, Form } from 'react-bootstrap'
import Header from '../Components/Header'
import insta from '../images/insta.png';
import f from '../images/f.png';
import twiter from '../images/twiter.png';
import { Link } from 'react-router-dom';


const SignUpPage = () => {
    return (
        <div className='landing-page'>
            <Header />
            <Container style={{ marginTop: '50px', display: 'flex', height: '100%' }}>
                <div className='col-7' style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'space-between' }}>
                    <div style={{ paddingTop: '90px' }}>
                        <h1 className='title' >Choppings</h1>
                        <p style={{ fontSize: '40px' }}>Chop “buka” in style!</p>
                    </div>
                    <div style={{ paddingBottom: '20px', display: 'flex', gap: 20, }}>
                        <a href='#'><img src={insta} /></a>
                        <a href='#'><img src={f} /></a>
                        <a href='#'><img src={twiter} /></a>
                    </div>
                </div>
                <div className='col-5' style={{ backgroundColor: 'white', borderRadius: 5, marginBottom: 20, display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '20px 30px' }}>
                    <div style={{ width: 30, height: 30, background: 'red', color: 'white', textAlign: 'center', borderRadius: 4, fontSize: 20, alignSelf: 'end', marginBottom: '20px' }}>x</div>
                    <h1 className='welcome'>Welcome to Choppings!</h1>
                    <div style={{ marginBottom: 22 }}>Please enter your details to create an account</div>
                    <Form.Control className='input' type="text" placeholder="Username" />
                    <br />
                    <Form.Control className='input' type="email" placeholder="Email" />
                    <br />
                    <Form.Control className='input' type="password" placeholder="Password" />
                    <br />
                    <Link className='loginBtn' style={{ width: '90%', textAlign: 'center', }} to='#'>Sign Up</Link>
                    <Link className='loginBtn' style={{ width: '90%', textAlign: 'center', marginBottom: 30, marginTop: 10 }} to='#'>Sign up as a partner</Link>


                </div>

            </Container >
        </div >
    )
}

export default SignUpPage
