import React from 'react';
import { FaAngleRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const ShareArticle = ({ article }) => {

    const { date, headLine, img, detail, _id } = article;

    // Define a maximum character limit for the description
    const maxDescriptionLength = 100;

    // Truncate the description if it exceeds the maximum length
    const truncatedDescription = detail.length > maxDescriptionLength
        ? detail.slice(0, maxDescriptionLength) + '...' // Add ellipsis
        : detail;

    return (

        <Link to={`/article/${_id}`}>
            <div className='border-2 rounded-lg hover:shadow-2xl hover:translate-y-2 duration-300 h-[550px]'>
                <img className='rounded-t-md' src={img} alt="" />

                <div className='p-5'>
                    <p className='mb-3 text-sm'>{date}</p>
                    <p className=' font-bold'>{headLine}</p>

                    <p className=' my-5 text-gray-500'>{truncatedDescription} </p>


                    <p className='text-gray-300 mt-10 hover:text-gray-500 duration-500 flex gap-3 items-center'>Read More <FaAngleRight className='h-6 w-6'></FaAngleRight> </p>

                </div>

            </div>
        </Link>
    );
};

export default ShareArticle;