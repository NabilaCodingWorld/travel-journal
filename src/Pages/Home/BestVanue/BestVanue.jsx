import React, { useEffect, useState } from 'react';
import Vanue from './Vanue';
import { Tooltip as ReactTooltip } from 'react-tooltip'

const BestVanue = () => {

    const [vanues, setVanues] = useState([])

    useEffect(() => {
        fetch('https://travel-journal-server.vercel.app/vanue')
            .then(res => res.json())
            .then(data => setVanues(data))
    }, [])

    return (
        <div className='my-20'>
            <div className='text-center'>
                <p className='text-4xl font-bold mb-5'>Best Value Trips</p>
                <p className='text-xl text-gray-500'>Best offers trips from us</p>
            </div>
            <a data-tooltip-id="my-tooltip" data-tooltip-content="Click To See Detail" className='mx-auto max-w-7xl grid md:grid-cols-3 gap-10'>
                {
                    vanues.map(vanueAdda => <Vanue key={vanueAdda._id} vanueAdda={vanueAdda}></Vanue>)
                }
            </a>
            <ReactTooltip id="my-tooltip" place="top" effect="solid" />
        </div>
    );
};

export default BestVanue;