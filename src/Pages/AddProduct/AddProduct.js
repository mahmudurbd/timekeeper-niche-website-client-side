import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import './AddProduct.css';
const AddProduct = () => {
    const { register, handleSubmit,reset } = useForm();
    const onSubmit = data => {
        console.log(data)
        axios.post('https://limitless-caverns-91030.herokuapp.com/products',data)
        .then(res => {
            if(res.data.insertId) {
                alert('Product added successfully');
                reset();
            }
        })
    };
    return (
        <div className="py-4 product-add-area">
            <h3 className="my-3">Please Add Product</h3>
            <form onSubmit={handleSubmit(onSubmit)} className="w-50 mx-auto p-5 shadow-lg">
                <div className="form-outline mb-4">
                    <input {...register("name")} type="text" id="form4Example1" className="form-control"placeholder="Product Name" />
                </div>
                <div className="form-outline mb-4">
                    <input {...register("price")} type="number" id="form4Example2" className="form-control"placeholder="Price" />
                </div>
                <div className="form-outline mb-4">
                    <input {...register("image")} type="text" id="form4Example2" className="form-control"placeholder="Provide Image Url" />
                </div>
                <div className="form-outline mb-4">
                    <input {...register("ratings")} type="number" id="form4Example2" className="form-control"placeholder="Ratings" />
                </div>
                <div className="form-outline mb-4">
                    <input {...register("reviews")} type="number" id="form4Example2" className="form-control"placeholder="Reviews" />
                </div>
                <div className="form-outline mb-4">
                    <textarea {...register("description")} className="form-control" id="form4Example3" rows="4">Description</textarea>
                </div>
                <button type="submit" className="product-add-btn mb-4">Send</button>
            </form>
        </div>
    );
};

export default AddProduct;