import React from 'react'
import { Container } from 'react-bootstrap'
import Header from '../Components/Header'

import { Link } from 'react-router-dom';


const OurServices = () => {
    return (
        <div className='services'>
            <Header />
            <Container style={{ marginTop: '70px', display: 'flex', flexDirection: 'column', height: '100%' }}>

                <h1 className='title' style={{ color: 'white', fontSize: 45, lineHeight: '100.4%' }}>
                    <span>Here is</span>
                    <br />
                    what we do.</h1>


                <div style={{ display: 'flex', marginTop: 20, marginBottom: 20, alignItems: 'center', justifyContent: 'space-between' }}>
                    <div className='card' >
                        <div className='title'> Lorem Ipsum</div>
                        <div style={{ width: 90, height: 10, background: 'red', borderRadius: 10, marginTop: 20, marginBottom: 30 }}></div>
                        <div className='desc'>Lorem ipsum lorem ipsumLorem ipsum lorem ipsum Lorem ipsum lorem ipsumLorem ipsum lorem ipsum. Lorem  ipsum Lorem ipsum lorem ipsumLorem ipsum lorem ipsum.</div>
                    </div>
                    <div className='card' >
                        <div className='title'> Lorem Ipsum</div>
                        <div style={{ width: 90, height: 10, background: 'red', borderRadius: 10, marginTop: 20, marginBottom: 30 }}></div>
                        <div className='desc'>Lorem ipsum lorem ipsumLorem ipsum lorem ipsum Lorem ipsum lorem ipsumLorem ipsum lorem ipsum. Lorem  ipsum Lorem ipsum lorem ipsumLorem ipsum lorem ipsum.</div>

                    </div>
                    <div className='card' >
                        <div className='title'> Lorem Ipsum</div>
                        <div style={{ width: 90, height: 10, background: 'red', borderRadius: 10, marginTop: 20, marginBottom: 30 }}></div>
                        <div className='desc'>Lorem ipsum lorem ipsumLorem ipsum lorem ipsum Lorem ipsum lorem ipsumLorem ipsum lorem ipsum. Lorem  ipsum Lorem ipsum lorem ipsumLorem ipsum lorem ipsum.</div>
                    </div>
                </div>
                <Link className='loginBtn' style={{ width: '15%', textAlign: 'center', marginBottom: 30, marginTop: 20 }} to='#'>Make a donation</Link>
            </Container >
        </div >
    )
}

export default OurServices
