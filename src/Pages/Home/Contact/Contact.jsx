import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {

    const form = useRef();
    const [formData, setFormData] = useState({
        to_name: '',
        from_name: '',
        message: '',
    });
    const [message, setMessage] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_oh0pz6d', 'template_3v0nx2t', form.current, 'ASqDdtT4Ef94GQmxT')
            .then((result) => {
                console.log(result.text);
                setMessage('Message sent successfully.');
                setFormData({
                    to_name: '',
                    from_name: '',
                    message: '',
                });
            })
            .catch((error) => {
                console.error(error.text);
                setMessage('An error occurred while sending the message.');
            });
    };

    return (
        <div>
            <div className='text-center my-20'>
                <p className='text-4xl font-bold mb-3'>Contact</p>
                <p className='md:mx-20 text-xl text-gray-600'>Climb mountains not so that the world can see you but so that you can see the world.</p>
            </div>


            <div className="hero-content  text-neutral-content">

                <form ref={form} onSubmit={sendEmail}>
                    <div className="md:max-w-md md:w-[1000px] bg-black p-10 bg-opacity-50 text-black mx-auto rounded-xl">
                        <label className="block font-bold mb-2 text-white text-xl" htmlFor="to_name">
                            Name
                        </label>
                        <input
                            className="appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                            id="to_name"
                            type="text"
                            name="to_name"
                            placeholder="Enter your name"
                            value={formData.to_name}
                            onChange={handleChange}

                        />

                        <label className="block font-bold mt-4 text-white text-xl" htmlFor="from_name">
                            Email
                        </label>
                        <input
                            className="appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                            id="from_name"
                            type="email"
                            name="from_name"
                            placeholder="Enter your email"
                            value={formData.from_name}
                            onChange={handleChange}

                        />

                        <label className="block font-bold mt-4 text-white text-xl" htmlFor="message">
                            Message
                        </label>
                        <textarea
                            className="appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                            id="message"
                            name="message"
                            placeholder="Enter your message"
                            rows="5"
                            value={formData.message}
                            onChange={handleChange}

                        />

                        <input
                            type="submit"
                            value="Send"
                            className='w-full btn btn-warning my-2'
                        />
                    </div>
                </form>

                {message && <p className="text-black text-center text-xl mt-4">{message}</p>}
            </div>
            <br /> <br />

        </div>
    );
};

export default Contact;