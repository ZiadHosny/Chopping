import React from 'react'
import { Container } from 'react-bootstrap'
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import DownloadApp from '../Components/DownloadApp';
import FavBukas from '../Components/FavBukas';
import HomeFooter from '../Components/HomeFooter';
import HomerHeader from '../Components/HomerHeader';
import NewBukas from '../Components/NewBukas';
import TodayBukas from '../Components/TodayBukas';
import fav1 from '../images/fav1.png'
import fav2 from '../images/fav2.png'
import fav3 from '../images/fav3.png'
import today1 from '../images/today1.png'
import today2 from '../images/today2.png'
import today3 from '../images/today3.png'

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
            <Container>
                <div style={titleStyle}>Today’s Special</div>
            </Container>
            <div style={{ marginLeft: 200, }}>
                <Slide autoplay={false} slidesToScroll={1} slidesToShow={3} arrows={false}>
                    <TodayBukas img={today1} price={700} title={'Asaro Elemi Meji'} />
                    <TodayBukas img={today2} price={1000} title={'Chicken Jollof Rice'} />
                    <TodayBukas img={today3} price={1200} title={'Chinese Fried Rice'} />
                    <TodayBukas img={today1} price={700} title={'Asaro Elemi Meji'} />
                    <TodayBukas img={today2} price={1000} title={'Chicken Jollof Rice'} />
                    <TodayBukas img={today3} price={1200} title={'Chinese Fried Rice'} />
                    <TodayBukas img={today1} price={700} title={'Asaro Elemi Meji'} />
                    <TodayBukas img={today2} price={1000} title={'Chicken Jollof Rice'} />
                    <TodayBukas img={today3} price={1200} title={'Chinese Fried Rice'} />

                </Slide>
            </div>
            <Container>
                <div style={titleStyle}>Favourite Bukas</div>
            </Container>
            <div style={{ marginLeft: 200 }}>
                <Slide autoplay={false} slidesToScroll={1} slidesToShow={3} arrows={false}>

                    <FavBukas img={fav1} />
                    <FavBukas img={fav2} />
                    <FavBukas img={fav3} />
                    <FavBukas img={fav1} />
                    <FavBukas img={fav2} />
                    <FavBukas img={fav3} />
                    <FavBukas img={fav1} />
                    <FavBukas img={fav2} />
                    <FavBukas img={fav3} />
                    <FavBukas img={fav1} />
                    <FavBukas img={fav2} />
                    <FavBukas img={fav3} />
                    <FavBukas img={fav1} />
                    <FavBukas img={fav2} />
                    <FavBukas img={fav3} />
                </Slide>
            </div>

            <Container>
                <div style={titleStyle}>Newly Registered Bukas   </div>
                <div style={{ display: 'flex', flexWrap: "wrap", columnGap: 220, rowGap: 40 }}>
                    <NewBukas />
                    <NewBukas />
                    <NewBukas />
                    <NewBukas />
                    <NewBukas />
                    <NewBukas />
                    <NewBukas />
                    <NewBukas />
                </div>
            </Container>
            <DownloadApp />
            <HomeFooter />

        </>
    )
}

export default Home
