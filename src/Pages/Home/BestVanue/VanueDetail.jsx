import React from 'react';
import { FaArrowLeft, FaBookmark } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom';
import BookedTour from './BookedTour';

const VanueDetail = () => {

    const vanuePlace = useLoaderData();
    

    const { price, name, place, day1, day2, day3, day4, img1, img2, img3 } = vanuePlace;

    return (
        <div>
            <div className="hero min-h-screen bg-fixed" style={{ backgroundImage: `url(${img1})` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-white">
                    <div className="max-w-7xl">
                        
                        <div className='text-center my-10'>
                        <h1 className="mb-5 text-5xl font-bold">{name}</h1>
                        <p className="mb-5 text-xl">{place}</p>
                        <button className="bg-red-600 px-6 py-2 rounded-lg r font-bold">${price}</button>
                        </div>

                        <BookedTour></BookedTour>
                    </div>
                </div>
            </div>
            <p className='text-center mt-3 text-gray-500'>The road to success and the road to failure are almost exactly the same</p>


            <div className='divider mx-20 my-20'> <FaBookmark className='h-10 w-10 text-red-700'></FaBookmark> </div>

            <div className='text-center mx-20'>
                <p className='text-2xl font-bold mb-5'>Day 1</p>
                <p className='text-gray-500 mb-20'>{day1}</p>

                <p className='text-2xl font-bold mb-5'>Day 2</p>
                <p className='text-gray-500 mb-5'>{day2}</p>
                <center> <img className='rounded-xl mb-20' src={img2} alt="" /> </center>

                <p className='text-2xl font-bold mb-5'>Day 3</p>
                <p className='text-gray-500 mb-5'>{day3}</p>
                <center> <img className='rounded-xl mb-20' src={img3} alt="" /> </center>

                <p className='text-2xl font-bold mb-5'>Day 4</p>
                <p className='text-gray-500 mb-20'>{day4}</p>
            </div>

            <Link to="/"> <FaArrowLeft className='h-6 w-6 ml-20 text-red-700'></FaArrowLeft> </Link> <br />

        </div>
    );
};

export default VanueDetail;