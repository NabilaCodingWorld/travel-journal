import React from 'react';
import { FaArrowLeft, FaBookmark } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom';

const ArticleDetail = () => {

    const article = useLoaderData();

    const { date, headLine, img, detail } = article;

    return (
        <div>
            <div className='bg-[#f9f9f9] py-10 border-b-2 mb-20'>
                <p className='text-center text-4xl font-bold md:mx-96'>{headLine}</p>
                <p className='my-3 text-center text-sm'>{date}</p>
            </div>

            <center className='mb-20'>
                <img className='rounded-lg mb-2' src={img} alt="" />
                <p className='text-gray-500 text-sm'>Emotional discomfort, when accepted, rises, crests and falls in a series of waves.</p>
            </center>

            <div className='divider mx-20 my-20'> <FaBookmark className='h-10 w-10 text-red-700'></FaBookmark> </div>

            <p className='text-center text-3xl font-bold md:mx-40 mb-20'>Design is a funny word. Some people think design means how it looks. But of course, if you dig deeper, it's really how it works.</p>

            <p className='text-gray-600 mb-10 mx-20'>{detail}</p>

            <Link to="/"><FaArrowLeft className='ml-20 my-10'></FaArrowLeft></Link>
        </div>
    );
};

export default ArticleDetail;