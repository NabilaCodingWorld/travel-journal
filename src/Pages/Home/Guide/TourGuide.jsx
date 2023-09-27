import React, { useEffect } from 'react';
import img from '../../../assets/rich-soul-uhri3Up9WB8-unsplash.jpg'
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import Aos from 'aos';
import 'aos/dist/aos.css';

const TourGuide = () => {

    const [sliderRef] = useKeenSlider({
        loop: true,
        mode: "free-snap",
        slides: {
            perView: 3,
            spacing: 15,
        },
    })

    useEffect(() => {
        Aos.init({
            offset: 200,
            easing: 'ease-in-sine',
            duration: 600
        });
    }, []);

    return (

        <div className='my-20 '>

            <h1 className='text-4xl text-center my-10'>Our Tour Guide</h1>

           <div ref={sliderRef} className="keen-slider" data-aos="fade-up" data-aos-offset="200" data-aos-duration="2000" >

      <div className="keen-slider__slide number-slide1">
        <img src={img} alt="" />

        <div className='text-center my-5'>
            <p className='md:text-xl text-sm'>Name: Karim Khan</p>
            <p className='text-sm'>Email: mnabila30163@gmail.com</p>
        </div>
      </div>

      <div className="keen-slider__slide number-slide2">
        <img src={img} alt="" />
        <div className='text-center my-5'>
            <p className='md:text-xl text-sm'>Name: Karim Khan</p>
            <p className='text-sm'>Email: mnabila30163@gmail.com</p>
        </div>
        </div>

      <div className="keen-slider__slide number-slide3">
        <img src={img} alt="" />
        <div className='text-center my-5'>
            <p className='md:text-xl text-sm'>Name: Karim Khan</p>
            <p className='text-sm'>Email: mnabila30163@gmail.com</p>
        </div>
        </div>


      <div className="keen-slider__slide number-slide4">
        <img src={img} alt="" />
        <div className='text-center my-5'>
            <p className='md:text-xl text-sm'>Name: Karim Khan</p>
            <p className='text-sm'>Email: mnabila30163@gmail.com</p>
        </div>
        </div>

    </div>
        </div>
    );
};

export default TourGuide;