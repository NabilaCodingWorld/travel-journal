import React from 'react';
import img1 from '../../../assets/1.png'
import img2 from '../../../assets/2.png'
import img3 from '../../../assets/3.png'

const Choose = () => {
    return (
        <div className='my-20'>
            <div className='text-center'>
                <p className='text-4xl font-bold mb-5'>Why Choose Us</p>
                <p className='text-xl text-gray-500'>Here are reasons you should plan trip with us</p>
            </div>

            <center className='mx-auto max-w-7xl grid md:grid-cols-3 gap-10 mt-20'>
                <div>
                    <img className='w-40' src={img1} alt="" />

                    <p className='text-2xl font-bold my-3'>Handpicked Hotels</p>
                    <p className='text-gray-500'>Lorem ipsum dolor sit amet, consect adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa</p>
                </div>

                <div>
                    <img  className='w-40' src={img2} alt="" />
                    <p className='text-2xl font-bold my-3'>World Class Service</p>
                    <p className='text-gray-500'>Lorem ipsum dolor sit amet, consect adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa</p>
                </div>

                <div>
                    <img  className='w-40' src={img3} alt="" />
                    <p className='text-2xl font-bold my-3'>Best Price Guarantee</p>
                    <p className='text-gray-500'>Lorem ipsum dolor sit amet, consect adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa</p>
                </div>
            </center>
        </div>
    );
};

export default Choose;
