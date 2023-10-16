import React from 'react';
import { Link } from 'react-router-dom';

const Place = ({place}) => {

    const {img1, name, _id} = place;

    return (
        <Link to={`popularDetails/${_id}`}>
            <img className='h-96 rounded-xl hover:shadow-2xl hover:translate-y-2 duration-300' src={img1} alt="" />

            <p className='text-2xl text-white font-bold uppercase relative -top-16 -right-4'>{name}</p>
        </Link>
    );
};

export default Place;