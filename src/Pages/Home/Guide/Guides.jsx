import React, { useState } from 'react';
import './Guide.css'

const Guides = ({guide}) => {

    const {img, name, email} = guide;

    const [hovered, setHovered] = useState(false);

    const handleMouseEnter = () => {
        setHovered(true);
    };

    const handleMouseLeave = () => {
        setHovered(false);
    };

    return (
        <div className="guide-container">
            <div
                className={`guide-container ${hovered ? 'hovered' : ''}`}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                <img className="guide rounded-sm" src={img} alt="" />
                {hovered && (
                    <div  className="overlayGuide">
                        <p className="overlay-guide">{name} , 
                        <br /> 
                        <span>{email}</span>
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

export default Guides;