import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import Swal from 'sweetalert2';

const img_hosting_token_1 = import.meta.env.VITE_Image_Upload_token_1;
const img_hosting_token_2 = import.meta.env.VITE_Image_Upload_token_2;
const img_hosting_token_3 = import.meta.env.VITE_Image_Upload_token_3;

const AddItem = () => {
    const { register, handleSubmit, reset } = useForm();
    const [axiosSecure] = useAxiosSecure();


    const img_hosting_url_1 = `https://api.imgbb.com/1/upload?key=${img_hosting_token_1}`;
    const img_hosting_url_2 = `https://api.imgbb.com/1/upload?key=${img_hosting_token_2}`;
    const img_hosting_url_3 = `https://api.imgbb.com/1/upload?key=${img_hosting_token_3}`;

    const [imageUrls, setImageUrls] = useState({
        image1: '',
        image2: '',
        image3: '',
    }); // State to store image URLs

    const onSubmit = async (data) => {
        try {
            // Function to upload an image and store its URL
            const uploadImage = async (key, image) => {
                const formData = new FormData();
                formData.append('image', image);

                let img_hosting_url = '';

                if (key === 'image1') {
                    img_hosting_url = img_hosting_url_1;
                } else if (key === 'image2') {
                    img_hosting_url = img_hosting_url_2;
                } else if (key === 'image3') {
                    img_hosting_url = img_hosting_url_3;
                }

                const imgResponse = await fetch(img_hosting_url, {
                    method: 'POST',
                    body: formData,
                });

                if (imgResponse.ok) {
                    const imgData = await imgResponse.json();
                    if (imgData.success) {
                        return imgData.data.display_url;
                    }
                }
                return null; // Return null if image upload fails
            };

            // Upload the first image
            const image1Url = await uploadImage('image1', data.image1[0]);
            if (!image1Url) {
                Swal.fire('Error', 'Image 1 upload failed', 'error');
                return;
            }

            // Upload the second image
            const image2Url = await uploadImage('image2', data.image2[0]);
            if (!image2Url) {
                Swal.fire('Error', 'Image 2 upload failed', 'error');
                return;
            }

            // Upload the third image
            const image3Url = await uploadImage('image3', data.image3[0]);
            if (!image3Url) {
                Swal.fire('Error', 'Image 3 upload failed', 'error');
                return;
            }

            // If all image uploads were successful, set the image URLs
            setImageUrls({
                image1: image1Url,
                image2: image2Url,
                image3: image3Url,
            });

            // Create the new item with image URLs
            const newItem = {
                name: data.name,
                description: data.description,
                image1: image1Url,
                image2: image2Url,
                image3: image3Url,
                residenceName: data.residenceName,
                residenceDetail: data.residenceDetail,
                foodName: data.foodName,
                foodDetail: data.foodDetail,
                seat: data.seat,
                cost: data.cost,
                date: data.date,
                category: data.category,
            };

            // Use axiosSecure for making the POST request to your backend
            const response = await axiosSecure.post('/destination', newItem);

            if (response.data.insertedId) {
                reset();
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Your work has been saved',
                    showConfirmButton: false,
                    timer: 1500,
                });
            } else {
                Swal.fire('Error', 'Failed to save the item.', 'error');
            }
        } catch (error) {
            console.error('Error:', error);
            Swal.fire('Error', 'An error occurred.', 'error');
        }
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
                        <input type="file" {...register("image1", { required: true })} className="file-input file-input-bordered w-full " />
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
                    <div className="form-control w-full my-4">
                        <label className="label">
                            <span className="label-text">Residence Image*</span>
                        </label>
                        <input type="file" {...register("image2", { required: true })} className="file-input file-input-bordered w-full " />
                    </div>

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
                    <div className="form-control w-full my-4">
                        <label className="label">
                            <span className="label-text">Food Image*</span>
                        </label>
                        <input type="file" {...register("image3", { required: true })} className="file-input file-input-bordered w-full " />
                    </div>

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
