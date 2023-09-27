import React from 'react';
import { useForm } from 'react-hook-form';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import Swal from 'sweetalert2';

const img_hosting_token = import.meta.env.VITE_Image_Upload_token;

const AddItem = () => {

    const { register, handleSubmit, reset } = useForm();

    const img_hosting_url=`https://api.imgbb.com/1/upload?key=${img_hosting_token}`

    const [axiosSecure] = useAxiosSecure();

    const onSubmit = data => {
        const formData = new FormData();
        formData.append('image', data.image[0])

        fetch(img_hosting_url, {
            method: 'POST',
            body: formData
        })

        .then(res => res.json())
        .then(imgResponse =>{
            if(imgResponse.success){
                const imgURL = imgResponse.data.display_url;

                const {name, description, image, residenceName, residenceDetail,  foodName, foodDetail, seat, cost, date, category } = data;

                const newItem = {name, description, image:imgURL, residenceName, residenceDetail,  foodName, foodDetail, seat, cost, date, category}

                axiosSecure.post('/destination', newItem)
                .then(data =>{
                    console.log(data.data)
                    if(data.data.insertedId){
                        reset()
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
            
        } )
    };

    return (
        <div>
            <div className="w-full px-10">

                <form onSubmit={handleSubmit(onSubmit)}>

                    {/* Place */}
                    <div className="form-control w-[800px] mb-4">

                        <label className="label">
                            <span className="label-text font-semibold">Place Name*</span>
                        </label>
                        <input type="text" placeholder="Place Name"
                            {...register("name", { required: true, maxLength: 120 })}
                            className="input input-bordered w-full " />
                    </div>


                    {/* Place Description */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Place Description</span>
                        </label>
                        <textarea {...register("description", { required: true })} className="textarea textarea-bordered h-24" placeholder="Write Something"></textarea>
                    </div>

                    {/* Place Image */}
                    <div className="form-control w-full my-4">
                        <label className="label">
                            <span className="label-text">Place Image*</span>
                        </label>
                        <input type="file" {...register("image", { required: true })} className="file-input file-input-bordered w-full " />
                    </div>

                    {/* Residance */}
                    <div className="form-control w-[800px] mb-4">

                        <label className="label">
                            <span className="label-text font-semibold">Residence Name*</span>
                        </label>
                        <input type="text" placeholder="Residence Name"
                            {...register("residenceName", { required: true, maxLength: 120 })}
                            className="input input-bordered w-full " />
                    </div>

                    {/* Residence Description */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Residence Description</span>
                        </label>
                        <textarea {...register("residenceDetail", { required: true })} className="textarea textarea-bordered h-24" placeholder="Write Something"></textarea>
                    </div>

                    {/* Residence Image */}
                    {/* <div className="form-control w-full my-4">
                        <label className="label">
                            <span className="label-text">Residence Image*</span>
                        </label>
                        <input type="file" {...register("residenceImage", { required: true })} className="file-input file-input-bordered w-full " />
                    </div> */}

                    {/* Food */}
                    <div className="form-control w-[800px] mb-4">

                        <label className="label">
                            <span className="label-text font-semibold">Food Name*</span>
                        </label>
                        <input type="text" placeholder="Food Name"
                            {...register("foodName", { required: true, maxLength: 120 })}
                            className="input input-bordered w-full " />
                    </div>

                    {/* Food Description */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Food Description</span>
                        </label>
                        <textarea {...register("foodDetail", { required: true })} className="textarea textarea-bordered h-24" placeholder="Write Something"></textarea>
                    </div>

                    {/* Food Image */}
                    {/* <div className="form-control w-full my-4">
                        <label className="label">
                            <span className="label-text">Food Image*</span>
                        </label>
                        <input type="file" {...register("foodImage", { required: true })} className="file-input file-input-bordered w-full " />
                    </div> */}

                    {/* Seat */}
                    <div className="form-control w-full ml-4">
                        <label className="label">
                            <span className="label-text font-semibold">Seat*</span>
                        </label>
                        <input type="number" {...register("seat", { required: true })} placeholder="Type here" className="input input-bordered w-full " />
                    </div>

                    {/* Cost */}
                    <div className="form-control w-full ml-4">
                        <label className="label">
                            <span className="label-text font-semibold">Cost*</span>
                        </label>
                        <input type="number" {...register("cost", { required: true })} placeholder="Type here" className="input input-bordered w-full " />
                    </div>

                    {/* Date */}
                    <div className="form-control w-full ml-4">
                        <label className="label">
                            <span className="label-text font-semibold">Date*</span>
                        </label>
                        <input type="date" {...register("date", { required: true })} placeholder="Select date" className="input input-bordered w-full" />
                    </div>

                    {/* Category */}
                    <div className="flex my-4">
                        <div className="form-control w-full ">
                            <label className="label">
                                <span className="label-text">Category*</span>
                            </label>
                            <select defaultValue="Pick One" {...register("category", { required: true })} className="select select-bordered">
                                <option disabled>Pick One</option>
                                <option>sylhet</option>
                                <option>rangamati</option>
                                <option>coxbaxar</option>
                                <option>bandorban</option>
                                <option>khagrachari</option>
                                <option>panchagar</option>
                                <option>barisal</option>
                            </select>
                        </div>
                    </div>

                    <input className="btn btn-warning mt-4" type="submit" value="Add Item" /> <br /><br />
                </form>
            </div>
        </div>
    );
};

export default AddItem;
