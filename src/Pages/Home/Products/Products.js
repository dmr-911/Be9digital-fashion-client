import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import { NavLink, useNavigate } from 'react-router-dom';
import './Products.css';
import ElectricProduct from '../../Explore/E_product/E_product';
import { HashLink } from 'react-router-hash-link';

const Products = () => {
    const [products, setProducts] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/e_products?home=home')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[]);
    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/explore')
    };


    return (
        <Container>
            <h1 className="fw-bold mt-5">Look for our <span className="text-danger">Electronic</span> products</h1>
            <p className="text-secondary mb-5">We are offering most interesting things for nice and affordable prices. Check it out. </p>
                <Row xs={1} md={4} className="g-3">
                    {
                        products.map(product => <ElectricProduct
                        key={product.key}
                        product={product}
                        ></ElectricProduct>)
                    }
                </Row>
                <button as={HashLink} onClick={handleClick} className="btn-banner d-inline mt-5">See all</button>
        </Container>
    );
};

export default Products;