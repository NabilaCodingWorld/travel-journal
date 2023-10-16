import React from 'react';

const GoogleMap = () => {
    return (
        <center>
            <div className='my-20 text-center'>
            <p className='font-bold text-4xl mb-3'>Google Map</p>
            <p className='text-xl text-gray-600'>Live your life by a compass not a clock</p>
            </div>

            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d392306.2682494125!2d90.3314604462604!3d24.003112908017968!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sbn!2sbd!4v1697377643390!5m2!1sbn!2sbd" width="550" height="450"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> <br />
        </center>
    );
};

export default GoogleMap;