import React, { useContext } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProviders';
import useAdmin from '../hooks/useAdmin';

const Dashboard = () => {

    const { user } = useContext(AuthContext);

    if (!user || !user.photoURL) {
        // Handle the case when user data is not available
        return <div>Loading...</div>; // or display a login prompt
    }

    // const isAdmin  = true;

    const [isAdmin] = useAdmin();

 

    return (
        <div>
            <div className="drawer lg:drawer-open w-full">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-center">
                    {/* Page content here */}
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

                    <Outlet></Outlet>

                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-60  min-h-full bg-[#11123A] text-white">
                        {/* Sidebar content here */}

                        {
                            isAdmin ?

                                (

                                    <>

                                    <center>
                                        <div className="avatar">
                                            <div className="w-24 mt-10 rounded-full">
                                                <img src={user.photoURL} />
                                            </div>
                                        </div>
                                    </center>

                                    <p className='text-center text-xl mt-3 font-bold mb-10'>{user.displayName}</p>

                                    <NavLink to="/dashboard"><li><a className='hover:text-white'>DashBoard Home</a></li></NavLink>

                                    <NavLink to="/dashboard/allUser"><li><a className='hover:text-white'>All User</a></li></NavLink>

                                    <NavLink to="/dashboard/addItem"><li><a className='hover:text-white'>Add Item</a></li></NavLink>

                                    <NavLink to="/dashboard/manageItems"><li><a className='hover:text-white'>Manage Item</a></li></NavLink>

                                    <NavLink to="/dashboard/payment"><li><a className='hover:text-white'>Payment</a></li></NavLink>

                                    <NavLink to="/dashboard/review"><li><a className='hover:text-white'>Review</a></li></NavLink>

                                </>
                                )

                                :

                                (
                                    <>
                                    <center>
                                        <div className="avatar">
                                            <div className="w-24 mt-10 rounded-full">
                                                <img src={user.photoURL} />
                                            </div>
                                        </div>
                                    </center>

                                    <p className='text-center text-xl mt-3 font-bold mb-10'>{user.displayName}</p>

                                    <NavLink to="/dashboard"><li><a className='hover:text-white'>DashBoard Home</a></li></NavLink>

                                    <NavLink to="/dashboard/mycart"><li><a className='hover:text-white'>Add Tour</a></li></NavLink>

                                    <NavLink to="/dashboard/payment"><li><a className='hover:text-white'>Payment</a></li></NavLink>

                                    <NavLink to="/dashboard/review"><li><a className='hover:text-white'>Review</a></li></NavLink>
                                </>
                                )

                        }


                        <p className='text-xl font-bold mt-5'>-----------------</p>
                        <NavLink to="/"><li><a className='hover:text-white'>Home</a></li></NavLink>

                        <NavLink to="/destination"><li><a className='hover:text-white'>Destination</a></li></NavLink>

                        <NavLink to="/gallery"><li><a className='hover:text-white'>Gallery</a></li></NavLink>
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Dashboard;