import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import NewProduct from '../NewProduct/NewProduct';
import './NewProducts.css';

const NewProducts = () => {
    const [products, setProducts] = useState([]);
    useEffect(()=>{
        fetch('https://be9digital-market.herokuapp.com/newProducts')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[]);

    return (
        <Container>
            <Row xs={1} md={3} lg={4} className="g-4 mb-4">
            {
               products.map(product => <NewProduct
               key={product._id}
               product={product}
               ></NewProduct>) 
            }
            </Row>
        </Container>
    );
};

export default NewProducts;