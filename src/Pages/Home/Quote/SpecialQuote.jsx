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

    useEffect(() => {
        Aos.init({
            offset: 200,
            easing: 'ease-in-sine',
            duration: 600
        });
    }, []);

    return (
        <div>
            <div data-aos="fade-up" data-aos-offset="200" data-aos-duration="2000" className='p-5'>
                <img src={img} alt="" /><br />
                <h1 className='text-4xl mb-5'>{author}</h1>
                <button className="btn btn-warning" onClick={openModal}>About Details</button>
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
