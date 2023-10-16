import { data } from 'autoprefixer';
import React, { useEffect, useState } from 'react';

const RegisteredPeople = () => {

    const [peoples, setPeoples] = useState([]);

    useEffect(() => {
        fetch('https://travel-journal-server.vercel.app/carts')
            .then(res => res.json())
            .then(data => setPeoples(data))
    }, [])

    return (
        <div className='md:mx-20 mx-2'> 
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                <label>
                                    Index
                                </label>
                            </th>
                            <th>Detail</th>
                            <th>Email</th>
                            <th>Date</th>
                            <th></th>
                        </tr>
                    </thead>
                    
                    {
                        peoples.map((people, index) => <tbody key={(people._id)} >
                            {/* row 1 */}
                            <tr>
                                <th>
                                    <label>
                                        {index+1}
                                    </label>
                                </th>
                                <td>
                                    <div className="flex items-center md:space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={people.photoURL} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">{people.user}</div>
                                            <div className="text-sm opacity-50">{people.name}, {people.category}</div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {people.email}
                                    <br />
                                    
                                </td>
                                <td>{people.date}</td>
    
                            </tr>
    
                        </tbody>)
                    }


                </table>
            </div>
        </div>
    );
};

export default RegisteredPeople;