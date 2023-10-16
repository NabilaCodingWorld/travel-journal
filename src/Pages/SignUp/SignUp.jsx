import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProviders';
import { FaEye, FaRegEye } from 'react-icons/fa';
import Swal from 'sweetalert2';

const SignUp = () => {

    const { createUser, updateUserProfile } = useContext(AuthContext);

    // show password
    const [showPassword, setShowPassword] = useState(false);

    const passwordShow = () => {
        setShowPassword(!showPassword);
    };

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

    const navigate = useNavigate();

    const onSubmit = data => {
        console.log(data);

        createUser(data.email, data.password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);

                updateUserProfile(data.name, data.photoURL)
                    .then(() => {
                        const saveUser = { name: data.name, email: data.email }
                        fetch('https://travel-journal-server.vercel.app/users', {
                            method: 'POST',
                            headers: {
                                'content-type': 'application/json'
                            },
                            body: JSON.stringify(saveUser)
                        })
                            .then(res => res.json())
                            .then(data => {
                                if (data.insertedId) {
                                    reset();
                                    Swal.fire({
                                        position: 'top-end',
                                        icon: 'success',
                                        title: 'User created successfully.',
                                        showConfirmButton: false,
                                        timer: 1500
                                    });
                                    navigate('/login');
                                }
                            })



                    })
                    .catch(error => console.log(error))
            })
            }
        


    return (

            <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)' }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">Register</h1>
                        <div className='containers  rounded-lg'>



                            <form onSubmit={handleSubmit(onSubmit)} className="max-w-xs mx-auto bg-slate-100 p-10 my-10 rounded-lg">

                                {/* Name */}
                                <div className="mb-4">

                                    <input
                                        id="name"
                                        type="name"
                                        {...register("name", { required: true })}
                                        name="name"
                                        className="input input-bordered mt-1 block w-full"
                                        placeholder="Enter your name"

                                    />
                                    {errors.name && <span className='text-red-500'>Name field is required</span>}
                                </div>

                                {/* Email */}

                                <div className="mb-4">

                                    <input
                                        id="email"
                                        type="email"
                                        {...register("email", { required: true })}
                                        name="email"
                                        className="input input-bordered mt-1 block w-full"
                                        placeholder="Enter your email"

                                    />
                                    {errors.email && <span className='text-red-500'>Email field is required</span>}
                                </div>

                                {/* password */}

                                <div className="mb-4 text-black relative">
                                    <input
                                        id="password"
                                        type={showPassword ? 'text' : 'password'}
                                        {...register("password", {
                                            required: true,
                                            minLength: 6,
                                            pattern: /(?=.*[A-Z])(?=.*[!@#$%^&*])/
                                        })}
                                        name="password"
                                        className="input input-bordered mt-1 block w-full"
                                        placeholder="Enter your password"
                                    />
                                    {errors.password?.type === 'required' && <p className='text-red-500'>Password is required</p>}
                                    {errors.password?.type === 'minLength' && <p className='text-red-500'>Password should be at least 6 characters</p>}
                                    {errors.password?.type === 'pattern' && <p className='text-red-500'>Password should contain at least one capital letter and one special character</p>}

                                    <div
                                        className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
                                        onClick={passwordShow}
                                    >
                                        {showPassword ? (
                                            <FaEye className='text-blue-400'></FaEye>
                                        ) : (
                                            <FaRegEye className='text-blue-400'></FaRegEye>
                                        )}
                                    </div>
                                </div>



                                {/* Confirm Password */}
                                {/* <div className="mb-4">
                    <label htmlFor="confirmPassword" className="text-sm font-medium text-gray-700">Confirm Password</label>
                    <input
                        id="confirmPassword"
                        type="password"
                        value={confirmPassword}
                        onChange={e => setConfirmPassword(e.target.value)}
                        name="confirmPassword"
                        className="input input-bordered mt-1 block w-full"
                        placeholder="Confirm your password"
                    />
                    {errors.confirmPassword?.type === 'required' && <p className='text-red-500'>Confirm Password is required</p>}

                    {errors.confirmPassword?.type === 'validate' && <p className='text-red-500'>Passwords do not match</p>}
                </div> */}


                                {/* Photo URL */}
                                <div className="mb-4">

                                    <input
                                        id="text"
                                        type="photoURL"
                                        {...register("photoURL", { required: true })}
                                        name="photoURL"
                                        className="input input-bordered mt-1 block w-full"
                                        placeholder="Enter your Photo Url"

                                    />
                                    {errors.photoURL?.type === 'required' && <p className='text-red-500'>Photo-Url is required</p>}
                                </div>

                                <div className="mt-6">
                                    <input className="btn btn-primary w-full" type="submit" value="Sign Up" />
                                </div>
                            </form>

                            {/* <SocialLogin></SocialLogin> */}

                            <h1 className='text-center my-5 font-bold pb-5 text-white'>If you have account already? So <Link to="/login" >Log In</Link> </h1>

                        </div>
                    </div>
                </div>
            </div>

        );
    };

    export default SignUp;