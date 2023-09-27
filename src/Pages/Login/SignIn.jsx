import React, { useContext, useState } from 'react';
import { AuthContext } from '../../Providers/AuthProviders';
import { FaEye, FaRegEye } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const SignIn = () => {

    const { loggIn } = useContext(AuthContext);

    const navigate = useNavigate();

    const from = location.state?.from?.pathname || '/';

    // show password
    const [showPassword, setShowPassword] = useState(false);

    const passwordShow = () => {
        setShowPassword(!showPassword);
    };

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        loggIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);

                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Your work has been saved',
                    showConfirmButton: false,
                    timer: 1500
                  })
                  navigate(from , {replace:true} )
            })
    }

    return (
        <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://png.pngtree.com/thumb_back/fh260/background/20230408/pngtree-travel-around-the-world-background-image_2169513.jpg)' }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">

                    <h1 className="mb-5 text-5xl font-bold">Log In</h1>

                    <div className='container md:ml-8 rounded-lg'>
                        
                        <form onSubmit={handleLogin} className="max-w-xs mx-auto bg-slate-100 p-10 my-10 rounded-lg">
                            {/* email */}
                            <div className="mb-4">
                                
                                <input
                                    id="email"
                                    type="email"
                                    name="email"
                                    className="input input-bordered mt-1 block w-full"
                                    placeholder="Enter your email"
                                    required
                                />
                            </div>

                            {/* password */}
                            <div className="mb-4">
                                <div className="relative">
                                    <input
                                        id="password"
                                        type={showPassword ? 'text' : 'password'}
                                        name="password"
                                        className="input input-bordered mt-1 block w-full pr-12 text-black"
                                        placeholder="Enter your password"
                                        required
                                    />

                                    <div
                                        className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
                                        onClick={passwordShow}
                                    >

                                        {showPassword ? (
                                            <FaEye></FaEye>
                                        ) : (
                                            <FaRegEye className='text-blue-400'></FaRegEye>
                                        )}
                                    </div>

                                </div>
                            </div>

                            <div className="mt-6">
                                <input onC className="btn btn-primary w-full" type="submit" value="Log In" />
                            </div>
                        </form>

                        {/* <center>
        <button onClick={handleGoogleLogIn} className='btn btn-primary '> <FaGoogle></FaGoogle> Google Log In</button>
      </center> */}

                        <h1 className='text-center my-5 pb-5 font-bold text-white'>Are You New Here? First <Link className='text-blue-500' to='/signup'>Sign Up</Link> </h1>


                    </div>

                </div>
            </div>
        </div>
    );
};

export default SignIn;