import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Products.css';
const Products = () => {
    const [products,setProducts] = useState([]);
    useEffect(() => {
        fetch('https://limitless-caverns-91030.herokuapp.com/products/6')
        .then(res => res.json())
        .then(data => setProducts(data));
    },[])
    return (
        <div id="products" className="container products py-5">
            <h2 className="py-4">Top Products</h2>
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 py-4">
                    {
                        products.map(product => <Product
                        key={product.name}
                        product = {product}
                        ></Product>)
                    }
                </div>
        </div>
    );
};

export default Products;