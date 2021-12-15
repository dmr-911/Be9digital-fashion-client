import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Products.css';
import E_product from '../../Explore/E_product/E_product';

const Products = () => {
    const [products, setProducts] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/e_products?home=home')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[]);

    return (
        <Container>
            <div className="d-flex justify-content-between">
                <h3>Electronic Products</h3>
                <NavLink to="/explore">See all</NavLink>
            </div>
                <Row xs={1} md={4} className="g-3">
                    {
                        products.map(product => <E_product
                        key={product.key}
                        product={product}
                        ></E_product>)
                    }
                </Row>
        </Container>
    );
};

export default Products;