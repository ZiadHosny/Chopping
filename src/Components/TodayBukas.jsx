import React from 'react'
import { Link } from 'react-router-dom'

const TodayBukas = ({ img, price, title }) => {
    return (
        <div style={{
            width: '400px',
            height: '250px',
            background: '#FFECC8',
            boxShadow: '0px 1px 8px 4px rgba(175, 175, 175, 0.32)',
            borderRadius: 10,
            backgroundImage: `url(${img})`,
            backgroundSize: "cover",
            backgroundPositionY: '-50px',
            margin: '20px 0',
            position: 'relative'
        }}>
            <div style={{ background: 'red', width: 70, position: 'absolute', fontSize: 12, borderRadius: '10px 0px 0px', color: 'white', padding: '1px 0px', textAlign: 'center' }}>{`#${price}`}</div>

            <div style={{ display: 'flex', padding: '20px', alignItems: 'end', justifyContent: 'space-between', height: '100%' }}>
                <div style={{ display: 'flex', gap: 60, justifyContent: 'space-between', alignItems: 'center' }}>
                    <div style={{
                        fontFamily: 'Raleway',
                        fontWeight: 600,
                        fontSize: '24px',
                        lineHeight: '28px',
                        color: ' #fff',
                    }}>
                        {title}
                    </div>
                    <Link style={{ background: 'red', textAlign: 'center', color: 'white', padding: '5px 15px', fontSize: 20, borderRadius: 6 }}>Order</Link>
                </div>
            </div>
        </div >
    )
}

export default TodayBukas