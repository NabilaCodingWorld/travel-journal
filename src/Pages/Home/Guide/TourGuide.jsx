import React, { useEffect, useState } from 'react';
import img from '../../../assets/rich-soul-uhri3Up9WB8-unsplash.jpg'
import Aos from 'aos';
import 'aos/dist/aos.css';
import Guides from './Guides';

const TourGuide = () => {

    useEffect(() => {
        Aos.init({
            offset: 200,
            easing: 'ease-in-sine',
            duration: 600
        });
    }, []);

    const [guides, setGuides] = useState([]);

    useEffect(() => {
        fetch('https://travel-journal-server.vercel.app/guide')
            .then(res => res.json())
            .then(data => setGuides(data))
    }, [])

    return (

        <div className='my-20 '>

            <div className='my-20 text-center'>
            <h1 className='text-4xl font-bold mb-3'>Our Tour Guide</h1>
            <p className='text-xl text-gray-600'>Life is either a daring adventure or nothing at all.</p>
            </div>

            <div className='mx-20 grid md:grid-cols-4 gap-10'>
                {
                    guides.map(guide => <Guides key={guide._id} guide={guide} ></Guides>)
                }
            </div>

        </div>

    );
};

export default TourGuide;