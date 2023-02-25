import React from 'react'
import { Container } from 'react-bootstrap'
import Slider from "react-slick";
import DownloadApp from '../Components/DownloadApp';
import HomeFooter from '../Components/HomeFooter';
import HomerHeader from '../Components/HomerHeader';

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
            <HomerHeader />
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
            <DownloadApp />
            <HomeFooter />

        </>
    )
}

export default Home
