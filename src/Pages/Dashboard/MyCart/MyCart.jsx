import React from 'react';
import useCarts from '../../../hooks/useCarts';
import { FaTrashAlt } from 'react-icons/fa';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';

const MyCart = () => {

    const [cart, refetch] = useCarts();

    const total = cart.reduce((sum, item) => item.cost + sum, 0);

    const handleDelete = row =>{
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
              fetch(`https://travel-journal-server.vercel.app/carts/${row._id}`,{
                    method: 'DELETE'
              })

              .then(res => res.json())
              .then(data =>{
                if(data.deletedCount > 0){
                    refetch();
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
             <div className="uppercase font-semibold h-[60px] flex justify-evenly items-center">
                <h3 className="text-3xl">Total Items: {cart.length}</h3>
                <h3 className="text-3xl">Total Price: ${total}</h3>
                <Link to="/dashboard/payment">
                    <button className="btn btn-warning btn-sm">PAY</button>
                </Link>
            </div> <br />

            <div className="overflow-x-auto">
                <table className="table w-[1000px]">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                <label>
                                    #
                                </label>
                            </th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Cose</th>
                            <th>Delete</th>
                        </tr>
                    </thead>

                    {
                        cart.map((row, index) => <tbody key={row._id}>
                            {/* row 1 */}
                            <tr>
                                <th>
                                    <label>
                                        {index+1}
                                    </label>
                                </th>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={row.image} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                     </div>
                                </td>


                                <td>{row.name}</td>

                                <td >{row.cost}</td>

                                <th>
                                    <button onClick={()=>handleDelete(row)} className="btn btn-ghost btn-xs"><FaTrashAlt className='h-5 w-10 text-red-700'></FaTrashAlt></button>
                                </th>
                            </tr>
                            
                        </tbody>)
                    }

                </table>
            </div>
        </div>
    );
};

export default MyCart;
