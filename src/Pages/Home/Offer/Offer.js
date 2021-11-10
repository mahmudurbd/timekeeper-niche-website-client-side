import React from 'react';
import offer from '../../../images/offer-clock.jpg';
const Offer = () => {
    return (
        <container>
            <div className="row">
                <div className="col-md-12 col-lg-6">
                    <h5>SPECIAL OFFER</h5>
                    <h3>SUCCULENT GARDEN</h3>
                    <h2>GIFT BOXES</h2>
                    <p>From planter materials to style options, discover which planter is best for your space.</p>
                    <button className="btn btn-danger">Details More</button>
                </div>
                <div className="col-md-12 col-lg-6">
                    <img className="img-fluid w-100" src={offer} alt="" />
                </div>
            </div>
        </container>
    );
};

export default Offer;