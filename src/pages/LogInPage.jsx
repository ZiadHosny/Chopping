import React from 'react'
import { Button, Container, Form } from 'react-bootstrap'
import Header from '../Components/Header'
import insta from '../images/insta.png';
import f from '../images/f.png';
import twiter from '../images/twiter.png';
import { Link } from 'react-router-dom';


const LogInPage = () => {
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
                    <div style={{ width: 30, height: 30, background: 'red', color: 'white', textAlign: 'center', borderRadius: 4, fontSize: 20, alignSelf: 'end', marginBottom: '30px' }}>x</div>
                    <h1 className='welcome'>Welcome back</h1>
                    <div style={{ marginBottom: 22 }}>Please enter your username and password to continue</div>
                    <Form.Control className='input' type="text" placeholder="Username" />
                    <br />
                    <Form.Control className='input' type="password" placeholder="Password" />
                    <br />
                    <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', alignItems: 'start' }}>

                        <label >
                            <input type="checkbox" name="key" value="value" />
                            <span>Remember me</span>
                        </label>

                        <div>
                            Forgot password?
                        </div>
                    </div>
                    <Link className='loginBtn' style={{ width: '90%', textAlign: 'center', marginBottom: 30, marginTop: 20 }} to='/login'>Log in</Link>
                    <div>
                        Don’t have an account? <Link to={'/signup'} style={{ color: 'red', fontWeight: 'bold' }}>Sign up</Link>
                    </div>

                </div>

            </Container >
        </div >
    )
}

export default LogInPage
