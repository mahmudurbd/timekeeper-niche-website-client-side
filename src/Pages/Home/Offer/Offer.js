import React from 'react';
import offer from '../../../images/offer-clock.jpg';
import './Offer.css';
const Offer = () => {
    return (
        <section className="fdb-block py-5 text-start offer-wrap">
            <div className="container">
                <div className="row align-items-center">
                <div className="col-12 col-md-12 col-lg-6 col-xl-5">
                    <h5>SPECIAL OFFER</h5>
                    <h4>SUCCULENT GARDEN</h4>
                    <h3>GIFT BOXES</h3>
                    <p className="lead mb-5">From planter materials to style options, discover which planter is best for your space.</p>
                    <button className="offer-btn">Explore Details</button>
                </div>
                <div className="col-12 col-md-8 m-auto ml-lg-auto mr-lg-0 col-lg-6 pt-5 pt-lg-0">
                    <img alt="" className="img-fluid" src={offer}/>
                </div>
                </div>
            </div>
        </section>
    );
};

export default Offer;