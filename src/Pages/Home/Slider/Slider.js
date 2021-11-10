import React from 'react';
import slide1 from '../../../images/Slider-1.jpg';
import slide2 from '../../../images/Slider-2.jpg';
import slide3 from '../../../images/Slider-3.jpg';
const Slider = () => {
    return (
        <div id="carouselExampleDark" class="carousel carousel-dark slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active bg-danger" aria-current="true" aria-label="Slide 1"></button>
    <button className="bg-danger" type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button className="bg-danger" type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active" data-bs-interval="10000">
      <img src={slide1} class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5 className="text-start">Great Leather Collection</h5>
        <p className="text-start">It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
        <button className="btn btn-danger text-start">Know More</button>
      </div>
    </div>
    <div class="carousel-item" data-bs-interval="2000">
      <img src={slide2} class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5 className="text-start">Black Great Addition</h5>
        <p className="text-start">It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
        <button className="btn btn-danger text-start">Know More</button>
      </div>
    </div>
    <div class="carousel-item">
      <img src={slide3} class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5 className="text-start">A Great Addition</h5>
        <p className="text-start">It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
        <button className="btn btn-danger btn-start">Know More</button>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
    );
};

export default Slider;