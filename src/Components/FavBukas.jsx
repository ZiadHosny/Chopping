import React from 'react'
import { Link } from 'react-router-dom'

const FavBukas = ({ img }) => {
    return (
        <div style={{
            width: '400px',
            height: '170px',
            background: '#FFECC8',
            boxShadow: '0px 1px 8px 4px rgba(175, 175, 175, 0.32)',
            borderRadius: 10,
            margin: '20px 0',
            padding: 10
        }}>
            <div style={{ display: 'flex', gap: 30, alignItems: 'center', justifyContent: 'space-between', height: '100%' }}>
                <img src={img} style={{ width: 100, height: 140, alignSelf: 'center' }} alt="" srcset="" />
                <div>
                    <div style={{
                        fontFamily: 'Raleway',
                        fontWeight: 700,
                        fontSize: '18px',
                        lineHeight: '106.4%',
                        color: ' #F31D1D',
                    }}>Mummy Tobi</div>
                    <div style={{ margin: '10px 0px' }}>Newly registered Buka in Agege, Lagos.</div>

                    <Link style={{ background: 'red', textAlign: 'center', color: 'white', padding: '5px 20px', borderRadius: 6 }}>View menu</Link>
                </div>
            </div>
        </div >
    )
}

export default FavBukas