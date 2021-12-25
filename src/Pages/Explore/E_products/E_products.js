import React, { useEffect, useState } from 'react';
import { Container, Row, Spinner } from 'react-bootstrap';
import './E_products.css';
import ElectricProduct from '../E_product/E_product';

const ElectricProducts = () => {
    const [products, setProducts] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/e_products')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[]);

    return (
        <Container>
            <h2>E_products</h2>
             <Row xs={1} md={4} className="g-4">
               {
                  products.length ? products.map(product => <ElectricProduct
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
        </Container>
    );
};

export default ElectricProducts;