import React, { useEffect, useState } from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Interested = () => {

    const [interested, setInterested] = useState([]);

    useEffect(() => {
        fetch('https://travel-journal-server.vercel.app/bookedVanue')
            .then(res => res.json())
            .then(data => setInterested(data))
    }, [])


    return (
        <div> 
              <Link to="/"><FaArrowLeft className='m-10'></FaArrowLeft></Link>
            <p className='text-center text-4xl font-bold mt-20'>Interested People </p>
            <div className="overflow-x-auto max-w-7xl mx-auto my-20">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Message</th>
                        </tr>
                    </thead>
                    <tbody>
                       
                       {
                        interested.map((interest, index) => <tr>
                            <th>
                                {index + 1}
                            </th>
                            <td>
                                <div className="flex items-center space-x-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={interest.photo} alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                {interest.name}
                            </td>
                            <td>{interest.email}</td>
                            <th>
                                {interest.message}
                            </th>
                        </tr> )
                       }
                        

                    </tbody>


                </table>
            </div>
        </div>
    );
};

export default Interested;