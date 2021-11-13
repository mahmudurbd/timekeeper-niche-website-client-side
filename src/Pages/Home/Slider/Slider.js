import React from 'react';
import './Slider.css';
import slide1 from '../../../images/Slider-1.jpg';
import slide2 from '../../../images/Slider-2.jpg';
import slide3 from '../../../images/Slider-3.jpg';
const Slider = () => {
    return (
        <div id="carouselExampleDark" className="carousel carousel-dark slide slider-wrap" data-bs-ride="carousel">
  <div className="carousel-indicators">
    <button className="bg-danger active" type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" aria-current="true" aria-label="Slide 1"></button>
    <button className="bg-danger" type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button className="bg-danger" type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active" data-bs-interval="10000">
      <img src={slide1} className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <p className="text-start slider-title">The Stone Series</p>
        <h1 className="text-start">Great Leather Collection</h1>
        <p className="text-start">It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
        <div className="text-start">
          <button className="text-white">Know More</button>
        </div>
      </div>
    </div>
    <div className="carousel-item" data-bs-interval="2000">
      <img src={slide2} className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
      <p className="text-start slider-title">Nice Top Series</p>
        <h1 className="text-start">Black Great Addition</h1>
        <p className="text-start">From timeless classics to the most innovative independent brands, take your collection to new heights with a selection of exceptional timepieces.</p>
        <div className="text-start">
          <button className="text-white">Know More</button>
        </div>
      </div>
    </div>
    <div className="carousel-item">
      <img src={slide3} className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
      <p className="text-start slider-title">Black & White Series</p>
        <h1 className="text-start">A Great Addition</h1>
        <p className="text-start">Find your dream watch on the leading marketplace for luxury watches.</p>
        <div className="text-start">
          <button className="text-white">Know More</button>
        </div>
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
    );
};

export default Slider;