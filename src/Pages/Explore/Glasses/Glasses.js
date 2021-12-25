import React, { useEffect, useState } from 'react';
import { Container, Row, Spinner } from 'react-bootstrap';
import E_product from '../E_product/E_product';
import './Glasses.css';
import useProducts from '../../../hooks/useProducts';

const Glasses = () => {
    const {products} = useProducts();
    const [items, setItems] = useState([]);
    useEffect(()=>{
        fetch('./glasses.json')
        .then(res => res.json())
        .then(data => setItems(data))
    },[]);

    return (
        <Container>
            <h3>Glasses</h3>
            <Row xs={1} md={4}>
                {
                    products ? items.map(item => <E_product
                    key={item.key}
                    product={item}
                    ></E_product>)
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