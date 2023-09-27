import React from 'react';
import Banner from '../Banner/Banner';
import Goals from '../Goals/Goals';
import Quote from '../Quote/Quote';
import TourGuide from '../Guide/TourGuide';

const Home = () => {
    return (
        <div className='overflow-x-hidden overflow-y-hidden'>
            <Banner></Banner>
            <Goals></Goals>
            <Quote></Quote>
            <TourGuide></TourGuide>
            
        </div>
    );
};

export default Home;