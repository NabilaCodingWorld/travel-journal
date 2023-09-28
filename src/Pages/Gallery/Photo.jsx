import React, { useEffect, useState } from 'react';
import './Photo.css'; 
import Aos from 'aos';
import 'aos/dist/aos.css';

const Photo = ({ destination }) => {
    const { image1, name, category, date } = destination;
    const [hovered, setHovered] = useState(false);

    const handleMouseEnter = () => {
        setHovered(true);
    };

    const handleMouseLeave = () => {
        setHovered(false);
    };

    useEffect(() => {
        Aos.init({
            offset: 200,
            easing: 'ease-in-sine',
            duration: 600
        });
    }, []);


    return (
        <div className="photo-container">
            <div
                className={`image-container ${hovered ? 'hovered' : ''}`}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                <img   className="image" src={image1} alt="" />
                {hovered && (
                    <div data-aos="fade-right" data-aos-offset="200" data-aos-duration="2000"  className="overlay">
                        <p className="overlay-text">{name} , <span>{category}</span>
                        <br /> 
                        <span>{date}</span>
                         </p>
                        
                    </div>
                )}
            </div>
            <div
                className={`image-container mt-3 ${hovered ? 'hovered' : ''}`}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                
            </div>
        </div>
    );
};

export default Photo;
