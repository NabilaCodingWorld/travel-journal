import React from 'react';
import useDestination from '../../../hooks/useDestination';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { FaTrashAlt } from 'react-icons/fa';
import Swal from 'sweetalert2';

const ManageItems = () => {

    const [destinations, refetch] = useDestination();

    const [axiosSecure] = useAxiosSecure();

    const handleDelete = (item) => {
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
                axiosSecure.delete(`/destination/${item._id}`)
                    .then((res) => {
                        console.log('deleted res', res.data);
                        if (res.data.deletedCount > 0) {
                            refetch(); // Trigger a refetch on successful delete
                            Swal.fire('Deleted!', 'Your file has been deleted.', 'success');
                        }
                    })
                    .catch((error) => {
                        console.error('Delete error', error);
                        Swal.fire('Error', 'Failed to delete the item.', 'error');
                    });
            }
        });
    };


   

    return (
        <div>
            <div className="w-full">
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Item</th>
                            <th>Category</th>
                            <th>Price</th>
                            <th>Update</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            destinations.map((item, index) => <tr key={item._id}>
                                <td>
                                    {index + 1}
                                </td>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={item.image} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">{item.name}</div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {item.category}
                                </td>
                                <td className="text-right">${item.cost}</td>
                                <td>
                                    <button className="btn btn-ghost btn-xs">details</button>
                                </td>
                                <td>
                                    <button onClick={() => handleDelete(item)} className="btn btn-ghost bg-red-600  text-white"><FaTrashAlt></FaTrashAlt></button>
                                </td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
        </div>
    );
};

export default ManageItems;