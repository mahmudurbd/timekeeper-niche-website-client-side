import React, { useEffect, useState } from 'react';
import SingleWatch from '../SingleWatch/SingleWatch';

const MoreWatches = () => {
    const [products,setProducts] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/products')
        .then(res => res.json())
        .then(data => setProducts(data));
    },[])
    return (
        <div id="products" className="container products py-5">
            <h2 className="py-4">Best Collection of Watches</h2>
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 py-4">
                    {
                        products.map(product => <SingleWatch
                        product = {product}
                        ></SingleWatch>)
                    }
                </div>
        </div>
    );
};

export default MoreWatches;