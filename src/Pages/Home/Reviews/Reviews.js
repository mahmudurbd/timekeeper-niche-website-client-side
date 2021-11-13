import './Reviews.css';
const Reviews = () => {
    return (
        <div id="carouselExampleDark2" className="carousel carousel-dark slide slider-wrap py-3 reviews-wrap" data-bs-ride="carousel">
            <h2 className="my-5">Our Client Says</h2>
            <div className="carousel-inner">
                <div className="carousel-item active" data-bs-interval="10000">
                <section className="fdb-block">
                    <div className="container">
                        <div className="row align-items-center justify-content-center">
                        <div className="col-md-6">
                            <div className="fdb-box fdb-touch">
                                <p className="h3 mb-4">"It's always a pleasure to get branded watch. They are personable, responsive, and results-oriented!"</p>
                                <p><strong className="ml-3">John Doe</strong></p>
                                <h5 className="ml-3">Programmer, SmartTech</h5>
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
                                </ul>
                            </div>
                        </div>
                        </div>
                    </div>
                </section>
            </div>
            <div className="carousel-item" data-bs-interval="2000">
            <section className="fdb-block">
                <div className="container">
                    <div className="row align-items-center justify-content-center">
                    <div className="col-md-6">
                    <div className="fdb-box fdb-touch">
                            <p className="h3 mb-4">"Timekeeper is attentive, personable, and professional. Will and his team provide great support for my needs."</p>
                            <p><strong className="ml-3">Robert Thom</strong></p>
                            <h5 className="ml-3">Co-founder, Navana</h5>
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
                            </ul>
                        </div>
                    </div>
                    </div>
                </div>
            </section>
            </div>
            <div className="carousel-item">
            <section className="fdb-block">
                <div className="container">
                    <div className="row align-items-center justify-content-center">
                    <div className="col-md-6">
                    <div className="fdb-box fdb-touch">
                            <p className="h3 mb-4">"Great results. Enjoyable to work with, and most importantly, enabled us to have the presence on the web we needed to conduct business in today's market."</p>
                            <p><strong className="ml-3">Akash Patel</strong></p>
                            <h5 className="ml-3">Manager, WeDev</h5>
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
                            </ul>
                        </div>
                    </div>
                    </div>
                </div>
            </section>
            </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark2" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark2" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
        </button>
    </div>
    )
};

export default Reviews;

