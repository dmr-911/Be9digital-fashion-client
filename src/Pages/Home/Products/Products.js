import React, { useEffect, useState } from 'react';
import { Container, Row, Spinner } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './Products.css';
import ElectricProduct from '../../Explore/E_product/E_product';
import { HashLink } from 'react-router-hash-link';

const Products = () => {
    const [products, setProducts] = useState([]);
    useEffect(()=>{
        fetch('https://be9digital-market.herokuapp.com/e_products?home=home')
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
                       products ? products.map(product => <ElectricProduct
                        key={product.key}
                        product={product}
                        ></ElectricProduct>)
                        :
                        <div className="d-flex justify-content-center align-items-center w-100" style={{height: '80vh'}}>
                        <div>
                        <Spinner animation="grow" size="sm" />
                        <Spinner animation="grow" />
                        </div>
                      </div>
                    }
                </Row>
                <button as={HashLink} onClick={handleClick} className="btn-banner d-inline mt-5">See all</button>
        </Container>
    );
};

export default Products;