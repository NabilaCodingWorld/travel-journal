import React from 'react';
import { Parallax } from 'react-parallax';

import img from '../../../assets/old-rusty-fishing-boat-slope-along-shore-lake_181624-44902.avif';

const Cover = () => {
    return (
        <div>
            <Parallax
                blur={{ min: -50, max: 50 }}
                bgImage={img}
                bgImageAlt="the dog"
                strength={-200}
            >
                <div className="hero h-[600px]">
                    <div className="hero-overlay bg-opacity-60"></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="max-w-md">
                            <p className='md:text-2xl text-center my-4'>Search Where You Want To Visit</p>
                            <div class="flex">
                                <input type="text" className="border border-gray-300 rounded-l-full py-2 px-4 md:w-96" placeholder="Search..." />
                                <button class="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-r-full">
                                    Search
                                </button>
                            </div>


                        </div>


                    </div>
                </div>
            </Parallax>
        </div>
    );
};

export default Cover;

