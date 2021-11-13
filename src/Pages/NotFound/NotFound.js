import React from 'react';
import './NotFound.css';
import notFound from '../../images/404.jpg';
const NotFound = () => {
    return (
        <section className="fdb-block py-5">
  <div className="container">
    <div className="row align-items-center">
      <div className="col-10 col-sm-6 m-auto col-md-4 pb-4 pb-md-0">
        <img alt="" className="img-fluid rounded-0" src={notFound}/>
      </div>
      <div className="col-12 ml-auto col-md-6 col-lg-5">
        <a className="not-found-btn mt-4 mb-5 mb-md-0 text-decoration-none" href="/home">Back To Homepage</a>
      </div>
    </div>
  </div>
</section>
    );
};

export default NotFound;