import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import useAuth from '../../hooks/useAuth';
import './Booking.css';
const Booking = () => {
    const {bookingId} = useParams();
    const [totalData,setTotalData] = useState([]);
    
    const {user} = useAuth();
    console.log(user.displayName);
    
    useEffect(()=> {
        fetch('https://timekeeper-website-server-side.vercel.app/products')
        .then(res => res.json())
        .then(data => setTotalData(data))
    },[]);

    const bookingItem = totalData.find(item => item._id == bookingId)
    
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = data => {
        data.order = bookingItem;
        
        fetch('https://timekeeper-website-server-side.vercel.app/orders',{
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(result => {
            if(result.insertedId){
                alert('Order processed successfully');
                reset();
            }
        })
    };
    return (
        <section className="intro booking-area">
            <div className="mask d-flex align-items-center h-100 gradient-custom">
                <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12 col-xl-10">
                    <div className="card my-4">
                        <div className="card-body p-5">
                        <div className="row d-flex align-items-center">
                            <div className="col-md-6 col-xl-7">
                            <div className="text-center pt-md-5 pb-5 my-md-5">
                            <div className="container">
                            <section className="mx-auto my-5" >
                            <div className="card">
                            <div className="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                                <img src={bookingItem?.image} className="img-fluid" alt="" />
                                <a href="#!">
                                <div className="mask" ></div>
                                </a>
                            </div>
                            <div className="card-body">
                                <h5 className="card-title font-weight-bold"><a href="/">{bookingItem?.name}</a></h5>
                                <ul className="list-unstyled list-inline mb-0">
                                <li className="list-inline-item ms-0">
                                <i className="fas fa-star text-warning fa-md"></i>
                                <i className="fas fa-star text-warning fa-md"></i>
                                <i className="fas fa-star text-warning fa-md"></i>
                                <i className="fas fa-star text-warning fa-md"></i>
                                <i className="fas fa-star-half-alt text-warning fa-md"></i>
                                     {bookingItem?.ratings}
                                </li>
                                <li className="list-inline-item">
                                    <p className="text-muted">{bookingItem?.reviews} (reviews)</p>
                                </li>
                                </ul>
                                <h4 className="mb-2">$ {bookingItem?.price}</h4>
                                <p className="card-text">{bookingItem?.description}</p>
                            </div>
                            </div>
                            
                        </section>
                    </div>
                  </div>

                </div>
                <div className="col-md-6 col-xl-4 text-center">

                  <h2 className="fw-bold mb-4 pb-2">Checkout Form</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-outline mb-4">
                        <input defaultValue={user.displayName} {...register("name")} type="text" id="typeText" className="form-control form-control-lg" placeholder="Your Name" />
                    </div>
                    <div className="form-outline mb-3">
                        <input defaultValue={user.email} {...register("email", { required: true })} type="email" id="typeEmail" className="form-control form-control-lg" placeholder="Your Email" />
                        {errors.email && <span className="text-danger">This field is required</span>}
                    </div>
                    <div className="form-outline mb-4">
                        <input defaultValue="" {...register("address")} type="text" id="typeText" className="form-control form-control-lg" placeholder="Address" />
                    </div>
                    <div className="form-outline mb-4">
                        <input defaultValue="" {...register("phone")} type="text" id="typeText" className="form-control form-control-lg" placeholder="Phone Number" />
                    </div>
                    <div className="text-center">
                        <button className="place-order-btn" type="submit">Place Order</button>
                        
                    </div>
                    </form>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
    );
};

export default Booking;