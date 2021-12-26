import React, { useEffect, useState } from 'react';
import { Container, Row, Spinner } from 'react-bootstrap';
import './Glasses.css';
import useProducts from '../../../hooks/useProducts';
import ElectricProduct from '../E_product/E_product';

const Glasses = () => {
    const {products} = useProducts();
    const [items, setItems] = useState([]);
    useEffect(()=>{
        fetch('./glasses.json')
        .then(res => res.json())
        .then(data => setItems(data))
    },[]);

    return (
        <Container id="glasses">
            <Row xs={1} md={4} className="g-4 mt-4">
                {
                    products ? items.map(item => <ElectricProduct
                    key={item.key}
                    product={item}
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

export default Glasses;