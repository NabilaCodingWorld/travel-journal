import React, { useEffect, useState } from 'react';
import SpecialQuote from './SpecialQuote';


const Quote = () => {

    const [details, setDetails] = useState([]);

    useEffect(() => {
        fetch('https://travel-journal-server.vercel.app/quote')
            .then(res => res.json())
            .then(data => setDetails(data))
    }, [])



    return (
        <div className='overflow-x-hidden mx-20 overflow-y-hidden'> <br />

            <div className='my-20'>
                <h1 className='text-4xl font-bold  text-center'>Quote Aboute Travelling</h1>
                <p className='text-center text-xl text-gray-600 mt-3'>Take only memories, leave only footprints.</p>
            </div>

            <div className='grid md:grid-cols-3 gap-5'>
                {
                    details.map(detail => <SpecialQuote
                        key={detail._id}
                        detail={detail}
                    ></SpecialQuote>)
                }
            </div>


        </div>
    );
};

export default Quote;