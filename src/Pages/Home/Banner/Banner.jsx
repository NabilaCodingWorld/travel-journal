import React, { useEffect, useRef } from 'react';

import img from '../../../assets/portrait-pretty-young-hipster-woman-having-fun-city-with-camera_1150-4602.jpg'

import Typed from 'typed.js';
import { Link } from 'react-router-dom';

const Banner = () => {

    const typedRef = useRef(null);

    useEffect(() => {
        const options = {
            strings: ['<i>Photos Of Beautiful Place.</i> ', 'About the Most Beautiful Place, You Visitted .', 'Your Bad Or Good Experience', 'Where you stay', 'About the best food of these place', 'Encourage People to visit There'],
            typeSpeed: 50,
        };


        const typed = new Typed(typedRef.current, options);

        return () => {
            typed.destroy();
        };
    }, []);

    return (
        <div>
            <div className="hero bg-fixed min-h-screen" style={{ backgroundImage: `url(${img})` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">Hello Travellers</h1>

                        <p className="mb-5 text-xl">Every Month We Organize Tour. Our Aims are: </p>

                        <span style={{ fontFamily: 'Quicksand' }} className='md:text-xl text-white font-bold text-xl' ref={typedRef}></span>  <br /> <br />
                <br />

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;