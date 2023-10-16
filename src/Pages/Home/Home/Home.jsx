import React from 'react';
import Banner from '../Banner/Banner';
import Goals from '../Goals/Goals';
import Quote from '../Quote/Quote';
import TourGuide from '../Guide/TourGuide';
import Gallery from '../../Gallery/Gallery';
import GoogleMap from '../GoogleMap/GoogleMap';
import PopularDestination from '../PopularDestination/PopularDestination';
import Choose from '../Choose/Choose';
import BestVanue from '../BestVanue/BestVanue';
import Article from '../Article/Article';
import Contact from '../Contact/Contact';

const Home = () => {
    return (
        <div className='overflow-x-hidden overflow-y-hidden'>
            <Banner></Banner>
            <Goals></Goals> <br /> <br />
            <PopularDestination></PopularDestination>
            <BestVanue></BestVanue>
            <Choose></Choose>
            <Article></Article>
            <Quote></Quote> <br /> <br />
            <TourGuide></TourGuide>
            <Gallery></Gallery>
            <GoogleMap></GoogleMap>
            <Contact></Contact>
         
            
        </div>
    );
};

export default Home;