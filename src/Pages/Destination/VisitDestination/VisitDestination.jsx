import React, { useContext, useEffect, useState } from 'react';
// import './VisitDestination.css';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import moment from 'moment/moment';
import { AuthContext } from '../../../Providers/AuthProviders';
import Swal from 'sweetalert2';

const VisitDestination = ({ place }) => {

    const { name, description, image1, category, cost, seat, date,  _id } = place;

    const { user } = useContext(AuthContext);

    const navigate = useNavigate();

    const location = useLocation();

    

    // Define a maximum character limit for the description
    const maxDescriptionLength = 50;

    // Truncate the description if it exceeds the maximum length
    const truncatedDescription = description.length > maxDescriptionLength
        ? description.slice(0, maxDescriptionLength) + '...' // Add ellipsis
        : description;


    const [currentDateTime, setCurrentDateTime] = useState(moment());

    useEffect(() => {

        const interval = setInterval(() => {
            setCurrentDateTime(moment());
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    const formattedDateTime = currentDateTime.format('MMMM Do YYYY');

    const handleAddToCart = place => {


        const addTourItem = {
            toutCartItem: _id,
            image1,
            name,
            seat,
            cost,
            truncatedDescription,
            photoURL: user?.photoURL,
            user: user?.displayName,
            category,
            date,
            email: user?.email
        }

        console.log(place);
        if (user) {
            fetch('https://travel-journal-server.vercel.app/carts', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(addTourItem)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.insertedId) {
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'Your work has been saved',
                            showConfirmButton: false,
                            timer: 1500
                        })
                    }
                })
        }

        else {
            Swal.fire({
                title: 'Are you sure?',
                text: "You won't be able to revert this!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, delete it!'
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login', { state: { from: location } })
                }
            })
        }

    }
    return (
        <div className='md:mx-auto'>
            <div>
                <p className='text-center mb-2'>
                    <span className='text-gray-500 text-center'>  {formattedDateTime}</span>
                </p>
                <div className='image'>
                    <div id="zoom-In">
                        <figure>
                            <img className='md:w-full h-80 w-80' src={image1} alt="" />
                        </figure>
                    </div>
                </div>

            </div>

            <div className='text-center my-4'>
                <p className='md:text-2xl text-sm'>{name} , <span className='hover:text-yellow-600  duration-700'>{category}</span> </p>

                <p className='my-2 md:text-xl text-sm'> Total Seat: <span className='px-2 bg-yellow-200'>{seat}</span></p>

                <p className='my-2 md:text-xl text-sm'> Date of Tour: <span className='px-2 bg-yellow-200'>{date}</span> </p>

                <p className='my-2 md:text-xl text-sm'> Total Cost: <span className='px-2 bg-yellow-200'>{cost}</span> </p>

                <p className='my-2 md:text-xl text-sm'>{truncatedDescription} <span className='text-blue-600'> <Link to={`/destination/${_id}`}> See More </Link> </span> </p>

                <button onClick={() => handleAddToCart(place)}  className='btn btn-warning mt-3'>Add Tour</button>
            </div>
        </div>
    );
};

export default VisitDestination;