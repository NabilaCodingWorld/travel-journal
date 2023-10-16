import Aos from 'aos';
import 'aos/dist/aos.css';
import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';


const SpecialQuote = ({ detail }) => {
    const { img, author, text } = detail;

    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    // useEffect(() => {
    //     Aos.init({
    //         offset: 200,
    //         easing: 'ease-in-sine',
    //         duration: 600
    //     });
    // }, []);

    return (
        <div className='hover:shadow-2xl hover:translate-y-2 duration-300'>
            <div className='border-2 rounded-lg'>
                <img className='w-full h-80 rounded-t-md' src={img} alt="" /><br />
                <div className='p-5 text-center'>
                    <h1 className='text-2xl mb-5 text-gray-600'>{author}</h1>
                    <button className="btn btn-outline btn-warning btn-sm" onClick={openModal}>About Details</button>
                </div>
            </div>
            {/* Modal */}
            <Modal
                isOpen={isModalOpen}
                onRequestClose={closeModal}
                contentLabel="About Details Modal"


                style={{
                    overlay: {
                        backgroundColor: 'rgba(0, 0, 0, 0.5)',
                    },
                    content: {
                        width: '80%',
                        height: '500px', // Adjust the width as needed
                        margin: 'auto',
                        padding: '50px',
                        border: 'none', // Remove border
                        borderRadius: '8px',
                        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                    },
                }}

            >
                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" onClick={closeModal}>✕</button>

                <h3 className="font-bold text-3xl">Hello, This is {author}</h3>
                <p className="py-4 text-xl">{text}</p>
            </Modal>
        </div>
    );
};

export default SpecialQuote;
