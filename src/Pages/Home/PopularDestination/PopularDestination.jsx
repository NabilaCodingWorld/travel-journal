import React, { useEffect, useState } from 'react';
import Place from './Place';
import { Tooltip as ReactTooltip } from 'react-tooltip'

const PopularDestination = () => {

    const [places, setPlaces] = useState([]);

    useEffect(() => {
        fetch('https://travel-journal-server.vercel.app/popularDestination')
            .then(res => res.json())
            .then(data => setPlaces(data))
    }, [])

    return (

        <div>
            <div className='text-center'>
                <p className='text-4xl font-bold mb-4'>Popular Destinations</p>
                <p className='text-xl mb-10 text-gray-500'>World's best tourist destinations</p>
            </div>
            <a data-tooltip-id="my-tooltip" data-tooltip-content="Click To See Detail" className='grid md:grid-cols-4 gap-10 mx-20'>
                {
                    places.map(place => <Place key={place._id} place={place}></Place>)
                }

                <ReactTooltip id="my-tooltip" place="top" effect="solid" />
            </a>
        </div>
    );
};

export default PopularDestination;