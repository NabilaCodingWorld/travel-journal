import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { FaTrashAlt, FaUserShield } from 'react-icons/fa';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../../hooks/useAxiosSecure';

const AllUsers = () => {

    const [axiosSecure] = useAxiosSecure();

    const { data: users = [], refetch } = useQuery(['users'],

        async () => {
            const res = await axiosSecure('/users')
            return res.data;
        })

        const handleMakeAdmin = user => {
            fetch(`https://travel-journal-server.vercel.app/users/admin/${user._id}`,{
                method: 'PATCH'
            })
            .then(res => res.json())
            .then(data => {
                if(data.modifiedCount){
                    refetch()
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: `${user.name}`,
                        showConfirmButton: false,
                        timer: 1500
                      })
                }
            })
        }


        const handleDeleteAdmin = user =>{

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
                  

                    fetch(`https://travel-journal-server.vercel.app/users/admin/${user._id}`,{
                        method: 'DELETE'
                    })
                    .then(res => res.json())
                    .then(data =>{
                        if(data.deletedCount > 0){
                            refetch()

                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                              )
                        }
                    })


                }
              })
        }


    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table table-zebra w-[800px]">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Index</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index)=> 
                            <tr key={user._id}>
                                <th>{index+1}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>
                                    {
                                        user.role === 'admin' ? 'admin' : <button onClick={() => handleMakeAdmin(user)
                                        }> 
                                        
                                        <FaUserShield className='h-5 w-8 text-blue-600'></FaUserShield> </button>}
                                </td>

                                <td><button onClick={()=> handleDeleteAdmin(user)}> <FaTrashAlt className='h-5 w-8 text-red-600'></FaTrashAlt> </button></td>

                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUsers;