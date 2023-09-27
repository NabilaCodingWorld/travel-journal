import React, { useEffect } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import img from '../../../../assets/travel-transparent-19.png'
import Aos from 'aos';
import 'aos/dist/aos.css';

const DestinationDetails = () => {
    const destination = useLoaderData();

    const { name, description, image, category, cost, seat, date, residanceName, recidanceImage, recidanceDetail, food, _id } = destination;

    useEffect(() => {
        Aos.init({
            offset: 200,
            easing: 'ease-in-sine',
            duration: 600
        });
    }, []);

    return (
        <div className='overflow-x-hidden'>
            <p className='md:text-4xl text-center my-10'>{name}, <span>{category}</span> </p>

            <center>
                <div className="hero  md:min-h-screen w-[80%] md:w-[100%]" style={{ backgroundImage: `url(${image})` }}>
                    <div className="hero-overlay bg-opacity-60"></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="max-w-md">

                            <h1 data-aos="fade-right" data-aos-offset="200" data-aos-duration="1000"  className="mb-5 md:text-5xl font-bold">{name}</h1>

                            <p data-aos="fade-right" data-aos-offset="200" data-aos-duration="1500"  className="mb-5 md:text-5xl">{category}</p>

                            <img data-aos="fade-right" data-aos-offset="200" data-aos-duration="2500"  className='md:w-60 w-36' src={img} alt="" />
                            
                        </div>
                        
                    </div>
                    
                    
                </div>

            </center> <br />

            <div className='grid md:grid-cols-3 ml-20  mb-10 md:text-xl'>
            <p>Total Cost: <span className='p-2 bg-yellow-200'>{cost}</span></p>
                <p>Total Seat: <span className='p-2 bg-yellow-200'>{seat}</span></p>
                <p> Date of Travel: <span className='p-2 bg-yellow-200'>{date}</span></p>
            </div>

        
            <p className='text-center md:text-xl my-20'>{description}</p>

            <p className='text-center md:text-4xl my-20'>{residanceName}</p>

            <div className='grid md:grid-cols-2 gap-10 md:mx-20 justify-center items-center mb-20'>
                <img className='hover:translate-y-4 duration-700' src={recidanceImage} alt="" />
                <p data-aos="fade-left" data-aos-offset="200" data-aos-duration="2000" className='md:text-xl'>{recidanceDetail}</p>
            </div>

            <p className='md:text-4xl text-center my-20'>Food</p>
            <div className='grid md:grid-cols-2 gap-10 md:mx-20 justify-center items-center mb-20'>

                
                <p data-aos="fade-right" data-aos-offset="200" data-aos-duration="2000" className='md:text-xl'>{food}</p>

                
                <img className='hover:translate-y-4 duration-700' src={recidanceImage} alt="" />
            </div>

            <center>
            <Link to="/destination"><button className='btn btn-warning'>Back To Home</button></Link> 
            </center> <br />

        </div>
    );
};

export default DestinationDetails;