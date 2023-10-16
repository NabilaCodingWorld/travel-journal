import React from 'react';
import { FaClock, FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Vanue = ({ vanueAdda }) => {

    const { price, name, place, img1, _id } = vanueAdda;

    return (
        <div>
            <Link to={`/vanueTour/${_id}`}>
                <div className='mt-10 border-2 rounded-xl hover:shadow-2xl hover:translate-y-2 duration-300'>
                    <img className='rounded-t-md' src={img1} alt="" />
                    <p className='relative -top-12 text-center  text-white text-bold bg-red-700 px-2 py-2 rounded-lg font-bold w-20'> ${price}</p>

                    <div className='p-5'>
                        <p className='text-2xl font-bold my-3'>{name}</p>
                        <p className='text-gray-500'>{place}</p>
                    </div>

                    <div className='p-5 flex justify-between'>

                        <div className='flex gap-2'>
                            <FaStar className='text-yellow-600'></FaStar>
                            <FaStar className='text-yellow-600'></FaStar>
                            <FaStar className='text-yellow-600'></FaStar>
                            <FaStar className='text-yellow-600'></FaStar>
                            <FaStar className='text-yellow-600'></FaStar>
                        </div>

                        <p className='flex justify-center items-center gap-1'>
                            <FaClock className='text-blue-600'></FaClock> <span>4 days</span>
                        </p>

                    </div>


                </div>
            </Link>
        </div>
    );
};

export default Vanue; 