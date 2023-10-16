import React from 'react';
import { FaArrowLeft, FaBookmark } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom';

const PopularDetails = () => {

    const popularDetails = useLoaderData();

    const { name, price, exploring, adventure, food, seeAndDo, around, img1, img2, img3, stay } = popularDetails;

    return (
            <div>
                <div className="hero bg-fixed min-h-screen" style={{ backgroundImage: `url(${img2})` }}>
                    <div className="hero-overlay bg-opacity-60"></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="max-w-md">
                            <h1 className="mb-5 text-5xl font-bold">{name}</h1>
                            <p className="mb-5 bg-red-600 px-8 py-1 rounded-2xl text-xl font-bold hover:translate-y-1 duration-700">${price}</p>

                            <p className='text-xl'>Booked Now</p>
                        </div>
                    </div>
                </div>

                <div className='divider mx-20 my-20'> <FaBookmark className='h-10 w-10 text-red-700'></FaBookmark> </div>

                <p className='text-2xl font-bold text-center my-20'>Today, {name} offers a seemingly unlimited choice of shopping, entertainment, culture and dining to its visitors</p>

                <div className='mx-20'>
                    <p className='text-4xl font-bold mb-5'>Exploring the Area</p>
                    <p className='text-gray-500 mb-20'>{exploring}</p>


                    <p className='text-4xl font-bold mb-5'>Coastal Adventures</p>
                    <p className='text-gray-500 mb-20'>{adventure}</p>

                    <center> <img className='rounded-2xl mb-10' src={img3} alt="" /> </center>

                    <p className='text-4xl font-bold mb-5'>Eating and Drinking</p>
                    <p className='text-gray-500 mb-20'>{food}</p>

                    <p className='text-4xl font-bold mb-5'>What to See and Do</p>
                    <p className='text-gray-500 mb-20'>{seeAndDo}</p>

                    <p className='text-4xl font-bold mb-5'>Where to Stay</p>
                    <p className='text-gray-500 mb-20'>{food}</p>

                    <p className='text-4xl font-bold mb-5'>How to Get Around</p>
                    <p className='text-gray-500 mb-20'>{around}</p>

                    <Link to="/"> <FaArrowLeft className='h-6 w-6 text-red-700'></FaArrowLeft> </Link> <br />


                </div>

            </div>
    );
};

export default PopularDetails;