import React, { useEffect, useState } from 'react';
import SpecialQuote from './SpecialQuote';


const Quote = () => {

    const [details, setDetails] = useState([]);

    useEffect(()=>{
        fetch('https://poetry-of-introversion-server.vercel.app/quote')
        .then(res => res.json())
        .then(data => setDetails(data))
    }, [])

    

    return (
        <div className='overflow-x-hidden overflow-y-hidden'> <br />
            <h1 className='text-4xl my-10 text-center'>Quote Aboute Travelling</h1>

            <div className='grid md:grid-cols-3 gap-5'>
                {
                    details.map(detail => <SpecialQuote
                        key={detail._id}
                        detail={detail}
                    ></SpecialQuote> )
                }
            </div>


        </div>
    );
};

export default Quote;