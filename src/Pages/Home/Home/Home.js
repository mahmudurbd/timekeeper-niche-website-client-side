import React from 'react';
import Products from '../../Products/Products';
import Offer from '../Offer/Offer';
import Reviews from '../Reviews/Reviews';
import Slider from '../Slider/Slider';

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <Products></Products>
            <Offer></Offer>
            <Reviews></Reviews>
        </div>
    );
};

export default Home;