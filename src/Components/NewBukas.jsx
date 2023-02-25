import React from 'react'
import { Link } from 'react-router-dom';
import buka from '../images/Buka.png';

const NewBukas = () => {
    return (
        <div style={{ position: 'relative' }} >
            <div style={{
                backgroundImage: `url(${buka})`,
                width: 150,
                height: 150,
                border: '4px solid red',
                borderRadius: '50%'
            }}></div>
            <div style={{
                position: 'absolute',
                top: 10,
                left: 120,
                width: 230,
                height: 130,
                padding: 10,
                background: '#FDF6E8',
                boxShadow: '0px 1px 4px 2px rgba(0, 0, 0, 0.15)',
                borderRadius: 8
            }}>
                <div style={{
                    fontFamily: 'Raleway',
                    fontWeight: 700,
                    fontSize: '18px',
                    lineHeight: '106.4%',
                    color: ' #F31D1D',
                }}>Mummy Tobi</div>
                <div style={{ margin: '10px 0px' }}>Newly registered Buka in Agege, Lagos.</div>
                <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <Link style={{ background: 'red', textAlign: 'center', color: 'white', padding: '5px 20px', borderRadius: 6 }}>View menu</Link>
                </div>
            </div>
        </div>
    )
}

export default NewBukas