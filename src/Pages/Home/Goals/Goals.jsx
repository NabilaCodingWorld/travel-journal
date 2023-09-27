import React, { useEffect } from 'react';

import img from '../../../assets/young-woman-wrapped-blanket-mountains_169016-22718.avif'
import Aos from 'aos';
import 'aos/dist/aos.css';

const Goals = () => {

    useEffect(() => {
        Aos.init({
            offset: 200,
            easing: 'ease-in-sine',
            duration: 600
        });
    }, []);

    return (
        <div> <br /> <br />
            <h1 className='text-center  md:text-4xl text-2xl my-10'>Our Goal</h1>

            <div   className='grid md:grid-cols-2 justify-center items-center gap-10 md:mx-10 mx-4 my-20 overflow-x-hidden'>

            <p data-aos="fade-right" data-aos-offset="200" data-aos-duration="2000"  className='text-sm md:text-xl'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia aspernatur facere necessitatibus hic ab. Inventore voluptatem, quasi facilis amet quo ullam blanditiis suscipit, a nobis, magni ipsam aspernatur corporis earum id quisquam laboriosam. Laboriosam sapiente odit ullam voluptas. Quasi qui, est nobis enim expedita alias. Laudantium rem inventore magnam animi similique voluptatibus, in iste, omnis dolorem atque totam esse nam harum delectus pariatur fuga ipsa! Officia nemo voluptatum reiciendis animi inventore quo. Quae quaerat quam autem ducimus officia eveniet, tempore veniam voluptas ratione, iusto recusandae quasi perferendis id ipsam nostrum. A amet adipisci saepe ad perspiciatis odio. Repellat, harum iure.</p>

            <img data-aos="fade-left" data-aos-offset="200" data-aos-duration="2000" src={img} alt="" />
        </div>
        </div>
    );
};

export default Goals;