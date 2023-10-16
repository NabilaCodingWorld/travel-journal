import React, { useContext, useRef } from 'react';
import Swal from 'sweetalert2';
import { AuthContext } from '../../../Providers/AuthProviders';
import { FaEdit } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const BookedTour = () => {

    const formRef = useRef(null);

    const { user } = useContext(AuthContext);

    const handleSubmitBooking = event => {

        event.preventDefault();
        const form = event.target;

        const photo = user?.photoURL;
        const name = user?.displayName;
        const email = user?.email;
        const message = form.message.value;

        const submitData = {photo, name, email, message }
        console.log(submitData);




        fetch('https://travel-journal-server.vercel.app/bookedVanue', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(submitData)
        })
            .then(res => res.json())
            .then(data => {
                console.log('inserted data')
                if (data.insertedId) {
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Your work has been saved',
                        showConfirmButton: false,
                        timer: 1500
                    })

                    // Reset the form
                    form.reset();
                }
            })

    }

    return (
        <div className='bg-white bg-opacity-30 p-10 rounded-lg'>
            <form ref={formRef} onSubmit={handleSubmitBooking} className="mt-8 space-y-6">

                <p className='text-center font-bold text-2xl flex gap-10 justify-center items-start'>Booked Now <Link to="/interested"> <FaEdit></FaEdit> </Link> </p>

                <div className='w-full'>

                    <label className="block text-gray-700 text-sm font-bold">
                        Photo:
                    </label>
                    <input
                        type="photoURL"
                        id="photo"
                        name="photo"
                        className="w-full p-3 mt-2 border rounded-md text-black"
                        placeholder="Photo"
                        defaultValue={user?.photoURL}
                    /> <br />


                    <label className="block text-gray-700 text-sm font-bold"> <br />
                        Name:
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        defaultValue={user?.displayName}
                        className="w-full p-3 mt-2 border rounded-md text-black"
                        placeholder="John Doe"
                    />


                    <div> <br />
                        <label className="block text-gray-700 text-sm font-bold">
                            Email:
                        </label>
                        <input
                            type="email"
                            id='email'
                            name='email'
                            defaultValue={user?.email}
                            className="w-full p-3 mt-2 border rounded-md text-black"
                            placeholder="Enter Number of People"
                        />
                    </div>
                </div>



                <div>
                    <label className="block text-gray-700 text-sm font-bold">
                        Message:
                    </label>
                    <textarea
                        className="w-full p-3 mt-2 border rounded-md text-black"
                        rows="4"
                        id='message'
                        name='message'
                        placeholder="Your message here..."
                        required
                    ></textarea>
                </div>
                <div>
                    <button
                        type="submit"
                        className="w-full py-2.5 text-white bg-blue-500 rounded-md hover:bg-blue-700"
                    >
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
};

export default BookedTour;