import React from 'react';
import { Link } from 'react-router-dom';

const SingleWatch = (props) => {
    const {_id,name,image,price,description,ratings,reviews} = props.product
    return (
        <div className="col product">
            <div className="card shadow h-100">
                <img
                    src={image}
                    className="card-img-top"
                    alt="..."
                />
                <div className="card-body">
                <h3 className="card-title font-weight-bold"><span>{name}</span></h3>
        <ul className="list-unstyled list-inline mb-0">
          <li className="list-inline-item me-0">
            <i className="fas fa-star text-warning fa-xs"> </i>
          </li>
          <li className="list-inline-item me-0">
            <i className="fas fa-star text-warning fa-xs"></i>
          </li>
          <li className="list-inline-item me-0">
            <i className="fas fa-star text-warning fa-xs"></i>
          </li>
          <li className="list-inline-item me-0">
            <i className="fas fa-star text-warning fa-xs"></i>
          </li>
          <li className="list-inline-item">
            <i className="fas fa-star-half-alt text-warning fa-xs"></i>
          </li>
          <li className="list-inline-item">
            <p className="text-muted">{ratings} ({reviews})</p>
          </li>
        </ul>
        <h3 className="mb-2">$ {price}</h3>
        <p className="card-text">{description}</p>
        
        <Link to={`/booking/${_id}`}>
            <button className="product-btn">Purchase Now</button>
        </Link>
                    
                </div>
            </div>
        </div>
    );
};

export default SingleWatch;