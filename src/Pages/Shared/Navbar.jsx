import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProviders';

const Navbar = () => {

    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error));
    }


    const renderAvatar = () => {
        if (user) {
            return (
                <div className="avatar">
                    <div className="w-12 md:ml-40 ml-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img src={user.photoURL} title={user.displayName} alt={user.displayName} />
                    </div>
                </div>
            );
        }

    }


    const navOptions = <>
        <Link to="/"><li><a className='hover:text-white'>Home</a></li></Link>

        <Link to="/destination"><li><a className='hover:text-white'>Destination</a></li></Link>

        <Link to="/gallery"><li><a className='hover:text-white'>Gallery</a></li></Link>

        <li><a className='hover:text-white'>Travellers Review</a></li>

        <li><a className='hover:text-white'>Blog</a></li>

        {
            user ?

                <>

                    <Link to="dashboard"><li><a className='hover:text-white'>DashBoard</a></li></Link>

                    <button onClick={handleLogOut} className='btn btn-warning btn-xs'>Logout</button>

                </>

                :
                <><Link to="/login"><li><a className='hover:text-white'>LogIn</a></li></Link></>
        }

    </>


    return (
        <div>
            <div className="navbar  bg-[#1F392C] text-white font-bold">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navOptions}
                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-xl">Travel Journal</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navOptions}
                    </ul>
                </div>
                <div className="navbar-end mr-10">
                    {user && (
                        <div >
                            {renderAvatar()}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Navbar;