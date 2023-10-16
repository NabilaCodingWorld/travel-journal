import React, { useEffect } from 'react';

import img from '../../../assets/young-woman-wrapped-blanket-mountains_169016-22718.avif'
import Aos from 'aos';
import 'aos/dist/aos.css';

const Goals = () => {

    // useEffect(() => {
    //     Aos.init({
    //         offset: 200,
    //         easing: 'ease-in-sine',
    //         duration: 600
    //     });
    // }, []);

    return (
        <div> <br /> <br />
            <h1 className='text-center font-bold   md:text-4xl text-2xl mt-20 mb-3 '>Our Goal</h1>
            <p className='text-center text-gray-500 text-xl'>Travel is the Oxyzen of Life</p>

            <div   className='grid md:grid-cols-2 justify-center items-center gap-10 md:mx-10 mx-4 my-20 overflow-x-hidden'>

            <p   className='text-sm md:text-xl text-gray-500'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia aspernatur facere necessitatibus hic ab. Inventore voluptatem, quasi facilis amet quo ullam blanditiis suscipit, a nobis, magni ipsam aspernatur corporis earum id quisquam laboriosam. Laboriosam sapiente odit ullam voluptas. Quasi qui, est nobis enim expedita alias. Laudantium rem inventore magnam animi similique voluptatibus, in iste, omnis dolorem atque totam esse nam harum delectus pariatur fuga ipsa! Officia nemo voluptatum reiciendis animi inventore quo. Quae quaerat quam autem ducimus officia eveniet, tempore veniam voluptas ratione, iusto recusandae quasi perferendis id ipsam nostrum. A amet adipisci saepe ad perspiciatis odio. Repellat, harum iure.</p>

            <img src={img} alt="" />
        </div>
        </div>
    );
};

export default Goals;