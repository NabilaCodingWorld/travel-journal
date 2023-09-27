import React from 'react';
import './People.css'

const People = ({ people }) => {

    const { name, user, category, photoURL, date, email } = people;

    return (
        <div className='mx-10 mt-20'>


            <div className='images'>
                <div id="zoom-In-of">
                    <figure>
                        <img className='md:w-full w-80' src={photoURL} alt="" />
                    </figure>
                </div>
            </div>


            <div className='text-center mt-2 text-2xl'>
                <p>{user}</p>
                <p>{name}, {category} </p>
                <p>{date}</p>
                <p>{email}</p>
            </div> <br />
        </div>
    );
};

export default People;